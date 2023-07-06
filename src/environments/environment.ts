// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    backend: 'http://195.201.193.246:8019',
    documentionApi: 'https://docs.zano.org',
    decimalPlaces: 2,
    transactionPoolLimit: 5,
    initialChartLoadDelayMs: 5000,
    frequencyOfChartRefreshingMs: 3600000,
    enableVisibilityInfo: true
}
