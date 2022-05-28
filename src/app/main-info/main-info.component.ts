import {
    Component,
    ViewEncapsulation,
    OnInit,
    Output,
    EventEmitter,
    OnDestroy
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SubscriptionTracker } from 'app/subscription-tracker/subscription-tracker'
import { DaemonInfos } from 'app/actions/get-info.actions'
import { Store, Select } from '@ngxs/store'
import { InfoState } from 'app/states/info-state'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-main-info',
    templateUrl: './main-info.component.html',
    styleUrls: ['./main-info.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export class MainInfoComponent
    extends SubscriptionTracker
    implements OnInit, OnDestroy
{
    info: any
    @Output() letGetInfo = new EventEmitter()
    height: number
    posDifficulty: number
    powDifficulty: number
    totalCoins: number
    NetworkHashrate: number
    txCount: number

    @Select(InfoState.selectDaemonInfo) getInfo$: Observable<Response[]>

    constructor(private route: ActivatedRoute, private store: Store) {
        super()
    }

    getInfoPrepare(data) {
        this.info = data
        if (this.info) {
            this.height = this.info.height
            this.posDifficulty = this.info.pos_difficulty
            this.powDifficulty = this.info.pow_difficulty
            this.totalCoins = this.info.total_coins
            this.txCount = this.info.tx_count
            this.NetworkHashrate = this.info.current_network_hashrate_350
        }
    }

    ngOnInit() {
        this.getInfoPrepare(this.route.snapshot.data['MainInfo'])
        this._track(
            this.getInfo$.subscribe((data) => {
                this.getInfoPrepare(data[0])
            })
        )
    }

    ngOnDestroy() {
        super.ngOnDestroy()
    }
}
