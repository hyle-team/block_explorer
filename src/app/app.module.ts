// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './app.router';
import {MomentModule} from 'angular2-moment';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CookieService, CookieOptions} from 'angular2-cookie/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Services
import {HttpService} from './http.service';
import {ServiceResolver, ResolveAltBlock} from './http.service';
import {MobileNavState} from './http.service';

// Pipes
import {OrderPipe} from './pipes.pipe';
import {OrderByPipe} from './pipes.pipe';
import {SortGridPipe} from './pipes.pipe';
import {BitNumberPipe} from './pipes.pipe';
import {MoneyParsePipe} from './pipes.pipe';
import {TruncatePipe} from './pipes.pipe';
import {TimeAgoPipe} from './pipes.pipe';
import {SortByAlphabetPipe} from './pipes.pipe';

// Components
import {AppComponent} from './app.component';
import {MainInfoComponent} from './main-info/main-info.component';
import {BlockchainComponent} from './blockchain/blockchain.component';
import {BlockDetailsComponent} from './block-details/block-details.component';
import {AltBlocksComponent} from './alt-blocks/alt-blocks.component';
import {AltBlocksDetailsComponent } from './alt-blocks-details/alt-blocks-details.component';
import {AliasesComponent} from './aliases/aliases.component';
import {TransactionComponent} from './transaction/transaction.component';
import {DialogComponent} from './dialog/dialog.component';
import {ServerErrorComponent} from './server-error/server-error.component';
import {SearchComponent} from './search/search.component';


@NgModule({
  declarations: [
    // Components
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

    // Pipes
    OrderPipe,
    OrderByPipe,
    SortGridPipe,
    BitNumberPipe,
    MoneyParsePipe,
    TruncatePipe,
    TimeAgoPipe,
    SortByAlphabetPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    BrowserAnimationsModule,
    MomentModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    HttpService,
    ServiceResolver,
    ResolveAltBlock,
    CookieService, { provide: CookieOptions, useValue: false },
    MobileNavState
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
