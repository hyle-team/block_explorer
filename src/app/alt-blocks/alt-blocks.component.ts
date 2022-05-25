import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HttpService, MobileNavState } from '../services/http.service'
import { CookieService } from 'ngx-cookie-service'
import { SubscriptionTracker } from '../subscription-tracker/subscription-tracker'

@Component({
    selector: 'app-alt-blocks',
    templateUrl: './alt-blocks.component.html',
    styleUrls: ['./alt-blocks.component.scss'],
    providers: []
})
export class AltBlocksComponent
    extends SubscriptionTracker
    implements OnInit, OnDestroy
{
    altBlocks: any
    count: number
    maxCount: number
    currentPage: number
    offset: number
    limitList: any
    visiblePagination: boolean
    loader: boolean
    navIsOpen: boolean
    searchIsOpen: boolean = false

    onIsVisible($event): void {
        this.searchIsOpen = $event
    }

    constructor(
        private route: ActivatedRoute,
        private httpService: HttpService,
        private cookieService: CookieService,
        private mobileNavState: MobileNavState
    ) {
        super()
        this.maxCount = 1000
        this.visiblePagination = false
        this.navIsOpen = false
    }

    ngOnInit() {
        this.currentPage = 1
        this.count = 20
        this.offset = 0
        if (this.cookieService.get('setCountAltBlocksCookie')) {
            this.count = parseInt(
                this.cookieService.get('setCountAltBlocksCookie'),
                10
            )
        }
        this.onChange()

        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen
        })
    }

    onChange() {
        this.loader = true
        if (this.count > this.maxCount) {
            this.count = this.maxCount
        }
        if (!this.count) {
            this.count = 1
        }
        this.limitList = +this.count
        this.cookieService.set('setCountAltBlocksCookie', this.limitList)
        this.offset = (this.currentPage - 1) * this.count
        this._track(
            this.httpService.getAltBlocks(this.offset, this.count).subscribe({
                next: (data) => {
                    this.altBlocks = data
                    for (let i = 0; i < this.altBlocks.length; i++) {
                        this.altBlocks[i].transactions_details = JSON.parse(
                            this.altBlocks[i].transactions_details
                        )
                    }
                },
                error: (err) => {
                    console.log('getAltBlocks', err)
                },
                complete: () => {
                    this.loader = false
                    this.visiblePagination = true
                }
            })
        )
    }

    nextPage() {
        if (this.altBlocks.length >= +this.count) {
            this.currentPage++
            this.onChange()
        }
    }

    prevPage() {
        if (this.currentPage - 1 > 0) {
            this.currentPage--
            this.onChange()
        }
    }

    ngOnDestroy() {
        super.ngOnDestroy()
    }
}
