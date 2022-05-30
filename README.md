# Blockexplorer

## Frontend

Edit source/environments.ts and source/environments.prod.ts

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

#### Run Frontend development Server

```
ng serve -o
```

## Backend Server

Edit `config.json`

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

#### Run Backend Server

```
node server-pg.js
```

## Build Frontend For Production

Following command will produce a `dist` folder that you can copy to your a web server

```
ng build --configuration production
```

# Postgresql

## Update system and install packages

```
sudo apt update && sudo apt install postgresql postgresql-contrib \
sudo systemctl start postgresql
```

## Add a New Role

1. Connect as postgres user and enter psql prompt

```
sudo -u postgres psql
```

2. Create a new role

```
sudo -u createuser --interactive --pwprompt
```

`Output`

`Enter name of role to add: zano`

`Enter Password`

`Enter Pass`

`Shall the new role be a superuser? (y/n) y`

## Configure postgresql for remote access

1. Edit postgresql.conf

```
sudo nano /etc/postgresql/13/main/postgresql.config

change `list_address = 'localhost' to `listen_address = '*' and uncomment
```

2. Edit pg_hba.conf and add a new line
   NOTE: **_For Security reasons you should never use 0.0.0.0/0, limit to an IP address or to a Subnet._**

```
# TYPE  DATABASE    USER    ADDRESS       METHOD
host    all         all     0.0.0.0/0     md5
```

3. Open firewall port if your ufw is active

```
sudo ufw allow 5432/tcp
```

4. Restart Postgresql Service

```
sudo system restart postgresql
```

# Install pgAdmin4 postgresql tool on client machine

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
6. Run the query to create the `db` schema and tables necessary to run block_explorer

# Nginx Setup

## Instal nginx and certbot

```
sudo apt update && sudo apt install nginx certbot
```

2. Start Nginx

```
sudo system nginx start
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

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/zano.smartcoinpool.net/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/zano.smartcoinpool.net/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = zano.smartcoinpool.net) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name zano.smartcoinpool.net;
    return 404; # managed by Certbot


}
```
