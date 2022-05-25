import { Component, OnInit, OnDestroy } from '@angular/core'
import { HttpService, MobileNavState } from '../services/http.service'
import { ActivatedRoute } from '@angular/router'
import { SubscriptionTracker } from '../subscription-tracker/subscription-tracker'
import { Store, Select } from '@ngxs/store'
import { InfoState } from '../states/info-state'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-block-details-component',
    templateUrl: './block-details.component.html',
    styleUrls: ['./block-details.component.scss'],
    providers: []
})
export class BlockDetailsComponent
    extends SubscriptionTracker
    implements OnInit, OnDestroy
{
    Block: any = {}
    info: any
    height: number
    posDifficulty: number
    powDifficulty: number
    totalCoins: number
    NetworkHashrate: number
    prevBlockId: string
    nextBlockId: string
    ThisBlockFeeMedian: any
    EffectiveFeeMedian: any
    txCount: number
    BlockNotFound: boolean
    minerTextInfo: any
    navBlockchain: any
    navBlockchainMobile: any

    navIsOpen: boolean
    searchIsOpen: boolean = false

    @Select(InfoState.selectDaemonInfo) getInfo$: Observable<Response[]>

    onIsVisible($event): void {
        this.searchIsOpen = $event
    }
    constructor(
        private route: ActivatedRoute,
        private httpService: HttpService,
        private mobileNavState: MobileNavState,
        private store: Store
    ) {
        super()
        this.BlockNotFound = false
        this.navBlockchain = document.getElementById('blockchain-li')
        this.navBlockchainMobile = document.getElementById(
            'blockchain-mobile-li'
        )
        this.navIsOpen = false
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
        if (this.navBlockchain) this.navBlockchain.classList.add('active')
        if (this.navBlockchainMobile)
            this.navBlockchainMobile.classList.add('active')
        this.getInfoPrepare(this.route.snapshot.data['MainInfo'])

        this._track(
            this.getInfo$.subscribe((data) => {
                this.getInfoPrepare(data[0])
            }),

            this.route.params.subscribe((params) => {
                this.httpService.getMainBlockDetails(params.id).subscribe({
                    next: (data) => {
                        this.Block = data
                        this.prevBlockId = this.Block.prev_id
                        this.minerTextInfo = this.Block.miner_text_info
                        if (
                            this.prevBlockId ===
                            '0000000000000000000000000000000000000000000000000000000000000000'
                        ) {
                            this.prevBlockId = undefined
                        }
                        this.nextBlockId = this.Block.next_id
                        this.ThisBlockFeeMedian =
                            this.Block.this_block_fee_median
                        this.EffectiveFeeMedian =
                            this.Block.effective_fee_median
                        this.BlockNotFound = false
                    },
                    error: (err) => {
                        this.BlockNotFound = true
                    }
                })
            }),

            this.mobileNavState.change.subscribe((navIsOpen) => {
                this.navIsOpen = navIsOpen
            })
        )
    }

    ngOnDestroy() {
        super.ngOnDestroy()
        this.navBlockchain.classList.remove('active')
        this.navBlockchainMobile.classList.remove('active')
    }
}
