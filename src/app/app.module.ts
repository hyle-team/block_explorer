// Modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app.router'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { ChartModule } from 'angular-highcharts'
import * as highstock from 'highcharts/modules/stock.src'

import * as Highcharts from 'highcharts'
import StockModule from 'highcharts/modules/stock'

StockModule(Highcharts)

// Services
import {
    HttpService,
    ServiceResolver,
    ResolveAltBlock,
    MobileNavState
} from './services/http.service'

// Components
import { AppComponent } from './app.component'
import { MainInfoComponent } from './main-info/main-info.component'
import { BlockchainComponent } from './blockchain/blockchain.component'
import { BlockDetailsComponent } from './block-details/block-details.component'
import { AltBlocksComponent } from './alt-blocks/alt-blocks.component'
import { AltBlocksDetailsComponent } from './alt-blocks-details/alt-blocks-details.component'
import { AliasesComponent } from './aliases/aliases.component'
import { TransactionComponent } from './transaction/transaction.component'
import { DialogComponent } from './dialog/dialog.component'
import { ServerErrorComponent } from './server-error/server-error.component'
import { SearchComponent } from './search/search.component'
import { ChartsComponent } from './charts/charts.component'
import { AvgBlockSizeComponent } from './charts/avg-block-size/avg-block-size.component'
import { AvgTransPerBlockComponent } from './charts/avg-trans-per-block/avg-trans-per-block.component'
import { HashrateComponent } from './charts/hashrate/hashrate.component'
import { DifficultyComponent } from './charts/difficulty/difficulty.component'
import { ConfirmTransPerDayComponent } from './charts/confirm-trans-per-day/confirm-trans-per-day.component'
import { DifficultyPowComponent } from './charts/difficulty-pow/difficulty-pow.component'
import { ApiComponent } from './api/api.component'
import { CookieService } from 'ngx-cookie-service'
import { PipesModule } from './pipes/pipes.module'
import { StakedCoinsComponent } from './staked-coins/staked-coins.component'
import { DevFundComponent } from './dev-fund/dev-fund.component'

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'
import { environment } from 'environments/environment'
import { NgxsModule } from '@ngxs/store'
import { InfoState } from './states/info-state'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { VisibilityState } from './states/visibility-state'
import { TransactionPoolState } from './states/transaction-pool-state'
import { BlockDetailsState } from './states/block-details-state'
import { ChartsState } from './states/charts-state'

const config: SocketIoConfig = { url: environment.backend, options: {transports: ['websocket', 'polling']} }

@NgModule({
    declarations: [
        AppComponent,
        MainInfoComponent,
        BlockchainComponent,
        BlockDetailsComponent,
        AltBlocksComponent,
        AltBlocksDetailsComponent,
        AliasesComponent,
        TransactionComponent,
        DialogComponent,
        ServerErrorComponent,
        SearchComponent,
        ChartsComponent,
        AvgBlockSizeComponent,
        AvgTransPerBlockComponent,
        HashrateComponent,
        DifficultyComponent,
        DifficultyPowComponent,
        ConfirmTransPerDayComponent,
        ApiComponent,
        StakedCoinsComponent,
        DevFundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        NgxJsonViewerModule,
        ChartModule,
        AppRoutingModule,
        PipesModule,
        SocketIoModule.forRoot(config),
        NgxsModule.forRoot([InfoState, VisibilityState, TransactionPoolState, BlockDetailsState, ChartsState], {
            developmentMode: !environment.production
        }),
        // NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
        // NgxsReduxDevtoolsPluginModule.forRoot()
    ],
    providers: [
        HttpService,
        ServiceResolver,
        ResolveAltBlock,
        CookieService,
        MobileNavState,
        { provide: ChartModule, useFactory: () => [highstock] }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
