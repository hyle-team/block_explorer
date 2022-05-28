import { Component, OnInit, OnDestroy } from '@angular/core'
import { MobileNavState } from '../services/http.service'
import { ActivatedRoute } from '@angular/router'
import { SubscriptionTracker } from '../subscription-tracker/subscription-tracker'
import { CookieService } from 'ngx-cookie-service'
import { Select, Store } from '@ngxs/store'
import { InfoState } from '../states/info-state'
import { Observable } from 'rxjs'
import { environment } from 'environments/environment'
import { GetInfo } from 'app/models/get-info'
import { Transaction_Pool } from 'app/models/transaction_pool'
import { TransactionPoolState } from 'app/states/transaction-pool-state'
import { TransactionPoolInfos } from 'app/actions/get-transaction-pool-info.actions'
import { BlockDetailsState } from 'app/states/block-details-state'
import { BlockDetail } from 'app/models/block_detail'
import { BlockDetails } from 'app/actions/get-block-details.actions'
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations'

@Component({
    selector: 'app-blockchain',
    templateUrl: './blockchain.component.html',
    styleUrls: ['./blockchain.component.scss'],
    providers: [],
    animations: [
        trigger('highlightNewItems', [
            state('new', style({})),
            state('old', style({})),            
            transition('void => new', animate('2000ms', keyframes([
                style({backgroundColor: '#e06a6a', offset: 0}),
                style({offset: 1})
            ]))),
        ])
    ]
})
export class BlockchainComponent
    extends SubscriptionTracker
    implements OnInit, OnDestroy
{
    info: GetInfo
    daemon_network_state: any
    setLimit: any
    limit: any
    currentPage: number
    goToBlock: number
    setBlock: number
    maxViewedBlockHeight: number
    maxViewedBlockHeights: Array<number> = []

    enableVisibilityInfo = environment.enableVisibilityInfo

    maxViewedPoolTimestamp: number
    maxViewedPoolTimestamps: Array<number> = []

    poolsOn: boolean
    poolLimit: number
    setBlockValid: boolean
    listBlockStart: number
    maxCountBlock: number
    txCount: number
    setPoolLimit: number = environment.transactionPoolLimit
    lastSendBlockDetail = {
        start: 0,
        limit: 0
    }
    loader: boolean
    navIsOpen: boolean
    searchIsOpen: boolean = false
    transactionCount: number = 0
    blockCount: number = 0

    @Select(InfoState.selectDaemonInfo) getInfo$: Observable<GetInfo[]>
    @Select(TransactionPoolState.selectLimitedTransactionPoolInfo) getLimitedTransactionPoolInfo$: Observable<Transaction_Pool[]>
    @Select(BlockDetailsState.selectRangeOfBlockDetails) selectRangeOfBlockDetails$: Observable<BlockDetail[]>

    onIsVisible($event): void {
        this.searchIsOpen = $event
    }

    constructor(
        private route: ActivatedRoute,
        private cookieService: CookieService,
        private mobileNavState: MobileNavState,
        private store: Store
    ) {
        super()
        this.daemon_network_state = {
            0: 'Offline',
            1: 'Synchronizing',
            2: 'Online',
            3: 'Loading core',
            4: 'System error',
            5: 'Completing work'
        }
        this.maxCountBlock = 1000
        this.poolsOn = true
        this.setBlockValid = true
        this.setLimit = 10
        this.loader = false
        this.navIsOpen = false
    }

    getInfoPrepare(data) {
        this.info = data
        this.onChange()
    }

    ngOnInit() {
        if (this.cookieService.get('OnOffButtonCookie')) {
            if (this.cookieService.get('OnOffButtonCookie') === 'true') {
                this.poolsOn = true
            } else if (
                this.cookieService.get('OnOffButtonCookie') === 'false'
            ) {
                this.poolsOn = false
            }
        } else {
            this.poolsOn = true
        }
        if (this.cookieService.get('setLimitCookie')) {
            this.setLimit = parseInt(
                this.cookieService.get('setLimitCookie'),
                10
            )
        }
        this.currentPage = 1
        this.setBlock = null

        this.getInfoPrepare(this.route.snapshot.data['MainInfo'])
        
        
        this._track(
            this.getInfo$.subscribe((data) => {
                this.getInfoPrepare(data[0])
            }),
            this.getLimitedTransactionPoolInfo$.subscribe(transactions => {
                if (this.maxViewedPoolTimestamps.length === 0) {
                    this.maxViewedPoolTimestamps = [0] //start somewhere
                }
                this.maxViewedPoolTimestamp = Math.max(...this.maxViewedPoolTimestamps)
                this.maxViewedPoolTimestamps = transactions.map(transaction => transaction.timestamp)
                this.transactionCount = transactions.length
            }),
            this.selectRangeOfBlockDetails$.subscribe(blocks => {
                if (this.maxViewedBlockHeights.length === 0) {
                    this.maxViewedBlockHeights = [this.info?.height - 1]  //start somewhere
                }
                this.maxViewedBlockHeight = Math.max(...this.maxViewedBlockHeights)
                this.maxViewedBlockHeights = blocks.map(block => block.height)
                this.blockCount = blocks.length
                this.loader = false
            }),
            this.mobileNavState.change.subscribe((navIsOpen) => {
                this.navIsOpen = navIsOpen
            })
        )
        this.onChange()
    }

    ngOnDestroy() {
        super.ngOnDestroy()
    }

    onChangePoolLimit() {
        this.store.dispatch(new TransactionPoolInfos.SetLimit(this.setPoolLimit))
    }

    toggleBtn() {
        this.poolsOn = !this.poolsOn
        const exp = new Date()
        exp.setMonth(exp.getMonth() + 3)
        this.cookieService.set('OnOffButtonCookie', String(this.poolsOn), {
            expires: exp
        })
    }

    prevPage() {
        if (this.currentPage - 1 > 0) {
            this.currentPage--
            this.onChange()
        }
    }

    nextPage() {
        if (this.currentPage !== Math.ceil(this.info.lastBlock / this.limit)) {
            this.currentPage++
            this.onChange()
        } else {
            return false
        }
    }

    onChangeLimit() {
        if (
            isNaN(+this.goToBlock) === false &&
            this.goToBlock !== undefined &&
            +this.goToBlock >= 0 &&
            +this.goToBlock < this.info.lastBlock
        ) {
            this.listBlockStart =
                +this.goToBlock -
                +this.setLimit +
                1 +
                ((this.info.lastBlock - 1 - +this.goToBlock) % +this.setLimit)
            this.currentPage =
                Math.floor(
                    (this.info.lastBlock - +this.setLimit - (this.listBlockStart + 1)) /
                        +this.setLimit
                ) + 2
        }
        this.onChange()
    }

    searchBlock() {
        this.goToBlock = this.setBlock
        if (
            isNaN(+this.goToBlock) ||
            +this.goToBlock < 0 ||
            +this.goToBlock >= this.info.lastBlock
        ) {
            this.setBlockValid = false
            return
        }
        this.setBlockValid = true
        this.listBlockStart =
            +this.goToBlock -
            +this.setLimit +
            1 +
            ((this.info.lastBlock - 1 - +this.goToBlock) % +this.setLimit)
        this.currentPage =
            Math.floor(
                (this.info.lastBlock - +this.setLimit - (this.listBlockStart + 1)) /
                    +this.setLimit
            ) + 2
        this.maxViewedBlockHeights = [this.listBlockStart + 10]
        this.onChange()
    }

    onChange() {
        if (!!this.info) {
            if (this.setLimit > this.maxCountBlock) {
                this.setLimit = this.maxCountBlock
            }
            if (!this.setLimit || this.setLimit < 0) {
                this.setLimit = 10
            }
            this.listBlockStart =
            this.info.lastBlock +
                1 -
                +this.setLimit -
                (this.currentPage - 1) * +this.setLimit
            this.limit = +this.setLimit

            this.cookieService.set('setLimitCookie', this.limit)

            if (this.listBlockStart < 0 || this.listBlockStart === null) {
                this.limit = this.limit + this.listBlockStart
                if (this.limit < 0) {
                    return
                }
                this.listBlockStart = 0
            }
            if (
                this.lastSendBlockDetail.start !== this.listBlockStart ||
                this.lastSendBlockDetail.limit !== this.limit
            ) {
                this.lastSendBlockDetail.start = this.listBlockStart
                this.lastSendBlockDetail.limit = this.limit
                this.loader = true

                this.store.dispatch(new BlockDetails.SetRange(this.listBlockStart, this.limit))
            }
        }
    }
}
