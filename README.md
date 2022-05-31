# Blockexplorer

## Block Explorer consists of two parts.
1. Frontend, An angular application, compile and served by nginx
2. Backend, A nodejs express api and websocket server.

___

## Frontend

#### Angular application is compiled into a set of minified js files that reside the build directory, these file should be transfered to your nginx directory for serving.

#### The following files `source/environments.ts and source/environments.prod.ts` are configuration file for debug and production builds

```
export const environment = {
  production: false,
  backend: 'http://10.0.0.13:8008',
  documentionApi: 'https://docs.zano.org',
  decimalPlaces: 2,
  initialChartLoadDelayMs: 5000,
  frequencyOfChartRefreshingMs: 3600000,
  enableVisibilityInfo: true
};
```

1. `backend` FQDN of your backend with the `frontEnd_api`
2. `documentationApi` Address used to build documentation explanations
3. `decimalPlaces` how many decimal places to use when displaying currency
4. `initialChartLoadDelayMs` how many milliseconds to wait after the app loads before attempting to fill the chart cache
5. `frequencyOfChartRefreshingMs` how often the chart cache should be refresh, currently 1 hour
6. `enableVisibilityInfo` show the dev fund wallet information

#### Once you have adjusted the configuration files to your needs, issue the following command to build the minified js files.
```bash
npm run 'build prod'
```

#### If you prefer to run the site in developer mode issue the following command. 

```
ng serve -o
```

___

## Backend Server

#### The following file contains all the configuration setting required to run your Backend, Edit `config.json`

```
{
    "api":"http://10.0.0.13:12111",
    "frontEnd_api": "http://localhost:4200",
    "server_port": "8008",
    "auditable_wallet": {
        "api": "http://10.0.0.13:12233"
    },
    "enableVisibilityInfo": true,
    "database": {
        "user": "zano",
        "host": "10.0.0.13",
        "port": 5432,
        "database": "db",
        "password": "123456"
    }
```

1. `"api"` The address of your zano node.
2. `"frontEnd_api"` The address of the angular uses for CORS. seems to not like 127.0.0.1
3. `"server_port"` Port of backend API used by angular to obtain data.
4. `"auditable_wallet"` FDQN of your auditable wallet running as a service.
5. `"database"` credentials and location of a postgresql database
6. `enableVisibilityInfo` stop/start websocket emitting dev fund wallet information

#### Once the postgresql database is installed, schema, tables, stored procedures and permissions configurated on the database, you should begin to synchronize zano node information to the database. this process takes around 10hrs

#### Issue the following command to Run the Backend Server.

```
node server-pg.js
```


# Dependencies Required to run block explorer

# Zano Node

#### Follow the instructions to clone and build a zano node and simple wallet
[ZANO](https://github.com/hyle-team/zano/blob/master/README.md)

#### Run a node
```
./zanod
```
#### Create a wallet
```
./simplewallet --generate-new-wallet my_new_wallet
```
#### Run simplewallet as a server. blockexplorer dislays wallet balance and staking information.
```
./simplewallet --wallet-file my_new_wallet --password 123456 --rpc-bind-ip 10.0.0.13 --rpc-bind-port 12233 --daemon-address 10.0.0.13:12111
```
# Create a new Non root User
```
sudo -u createuser zano
```
## Add new User to the sudoers group
```
sudo usermod -aG sudo zano
```

# Postgresql

#### helpful postgresql commands
1. `\q` quit the psql shell
2. `\l` list available databases
3. `\c [database]` connect to a database
4. `\dt` list available tables in the database after you connected `\c [database]`

#### Update your system and install packages

```
sudo apt update && sudo apt install postgresql postgresql-contrib \
sudo systemctl start postgresql
```
#### Login to database as postgres user and add new user `zano` role for postgres
```
sudo -u postgres psql
CREATE ROLE zano LOGIN SUPERUSER;
```
#### Create a new database
```
CREATE DATABASE db;
```
#### Run the `database.sql` script to create the tables, stored procedures and grant permissions to these database objects for the `zano` user
```
psql -f database.sql
``` 

# ***If you intend to run Backend and postgresql on different servers you will need to configure postgresql for remote access. Once configured for remote access you will also need to install pgAdmin4 to administer your database remotely.***

# Configure postgresql for remote access.

#### Edit postgresql.conf
```
sudo nano /etc/postgresql/13/main/postgresql.config

```
#### locate the entry `#list_address = 'localhost'` uncomment and change to `listen_address = '*'`. This will configure postgresql to listen on all ports.

---

#### Edit pg_hba.conf and add a new line to the bottom of the file
# NOTE: ****_For Security reasons you should never use 0.0.0.0/0, limit to an IP address or to a Subnet._****

```
# TYPE  DATABASE    USER    ADDRESS       METHOD
host    all         all     10.0.0.15/24     md5
```

#### If you use UFW Open the firewall port to allow remote connections to port 5432
```
sudo ufw allow 5432/tcp
```

4. Restart Postgresql Service

```
sudo systemctl restart postgresql
```

# Install pgAdmin4 postgresql tool on client machine [***not neccessary if you administer locally***]

## Update Ubuntu repositories

```
$ curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add
$ sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'
```

## Install pgAdmin4 on remote machine you intend to administer the database from.

```
sudo apt install pgadmin4
```

## Start pgAdmin4

1. create a connection to your server, provide a master password
2. connect to your server with the role created previously

`username: zano`

`password: 123456`

3. Right click `Database` and select create Database
4. From the toolbar select `query tool`
5. In the query editor open file and select `database.sql`
6. Run the query to create the `db` tables, stored procedures and permissions necessary to run block_explorer

# Nginx Setup

## Instal nginx >= 1.4 and certbot

```
sudo apt update && sudo apt install nginx certbot
```

2. Start Nginx

```
sudo systemctl nginx start
```

## Create site configuration

```
sudo nano /etc/nginx/sites-available/zano.smartcoinpool.net
```

```
server {
    server_name zano.smartcoinpool.net;
    gzip on;
    gzip_types *;
    gzip_min_length 1000;
    
    # Set files location
    root /var/www/block-explorer/dist/;
    index index.html;

    location ~ ^/(.*) {
        proxy_pass http://127.0.0.1:8008/$1$is_args$args;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        #wss requires nginx 1.4
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

    }
}

server {
    listen 80;
    server_name zano.smartcoinpool.net;
}
```
