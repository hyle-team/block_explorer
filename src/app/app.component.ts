import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core'
import { Router, Event, NavigationEnd } from '@angular/router'
import { MobileNavState } from './services/http.service'
import { WebSocketService } from './services/web-socket.service'
import { SubscriptionTracker } from './subscription-tracker/subscription-tracker'
import { Store } from '@ngxs/store'
import { DaemonInfos } from './actions/get-info.actions'
import { VisibilityInfos } from './actions/get-visibility-info.actions'
import { TransactionPoolInfos } from './actions/get-transaction-pool-info.actions'
import { Charts } from './actions/get-chart-actions'
import { forkJoin, Observable, of, switchMap, tap, timer } from 'rxjs'
import { environment } from 'environments/environment'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: []
})
export class AppComponent
    extends SubscriptionTracker
    implements OnInit, OnDestroy
{
    navIsOpen: boolean

    constructor(
        private router: Router,
        private mobileNavState: MobileNavState,
        private webSocketService: WebSocketService,
        public store: Store
    ) {
        super()
        this.store.dispatch(new DaemonInfos.Get())
        this.store.dispatch(new VisibilityInfos.Get())
        this.store.dispatch(new TransactionPoolInfos.Get())
        
        this.webSocketService.init()
        this.navIsOpen = true
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                if (this.navIsOpen === true) {
                    this.mobileNavState.toggleMenu()
                }
            }
        })
        this._track(
        timer(environment.initialChartLoadDelayMs, environment.frequencyOfChartRefreshingMs).pipe(
            switchMap((_) => {
                    this.store.dispatch(new Charts.GetAll()),
                    this.store.dispatch(new Charts.GetPOSDifficulty()),
                    this.store.dispatch(new Charts.GetPOWDifficulty()),
                    this.store.dispatch(new Charts.GetAverageBlockSize()),
                    this.store.dispatch(new Charts.GetAverageTransactionsPerBlock()),
                    this.store.dispatch(new Charts.GetConfirmedTransactionsPerDay()),
                    this.store.dispatch(new Charts.GetHashRate())
                    return of(true)
            })
        ).subscribe()
        )
    }

    ngOnInit() {
        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen
        })
    }

    btnToggleMenu() {
        this.mobileNavState.toggleMenu()
    }

    ngOnDestroy() {
        super.ngOnDestroy()
    }
}
