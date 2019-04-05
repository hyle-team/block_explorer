import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {BlockchainComponent} from './blockchain/blockchain.component';
import {BlockDetailsComponent} from './block-details/block-details.component';
import {AltBlocksComponent} from './alt-blocks/alt-blocks.component';
import {AltBlocksDetailsComponent} from './alt-blocks-details/alt-blocks-details.component';
import {AliasesComponent} from './aliases/aliases.component';
import {ChartsComponent} from './charts/charts.component';
import {TransactionComponent} from './transaction/transaction.component';
import {ServerErrorComponent} from './server-error/server-error.component'

// Resolve
import {ServiceResolver, ResolveAltBlock} from './http.service';

export const router: Routes = [
  {
    path: '',
    component: BlockchainComponent,
    resolve: {
      MainInfo: ServiceResolver
    }
  },
  {
    path: 'block/:id',
    component: BlockDetailsComponent,
    resolve: {
      MainInfo: ServiceResolver
    }
  },
  {
    path: 'alt-blocks',
    component: AltBlocksComponent
  },
  {
    path: 'alt-blocks/:id',
    component: AltBlocksDetailsComponent,
    resolve: {
      MainInfo: ServiceResolver,
      AltBlock: ResolveAltBlock
    }
  },
  {
    path: 'transaction/:tx_hash',
    component: TransactionComponent,
    resolve: {
      MainInfo: ServiceResolver,
    }
  },
  {
    path: 'aliases',
    component: AliasesComponent,
    resolve: {
      MainInfo: ServiceResolver
    }
  },
  {
    path: 'charts',
    component: ChartsComponent,
  },
  {
    path: 'server-error',
    component: ServerErrorComponent
  },
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', redirectTo: '', component: BlockchainComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
