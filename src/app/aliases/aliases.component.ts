import { Component, OnInit, OnDestroy, NgZone } from '@angular/core'
import { HttpService, MobileNavState } from '../services/http.service'
import { ActivatedRoute } from '@angular/router'
import { take } from 'rxjs/operators'
import { SubscriptionTracker } from '../subscription-tracker/subscription-tracker'
import { CookieService } from 'ngx-cookie-service'

@Component({
    selector: 'app-aliases',
    templateUrl: './aliases.component.html',
    styleUrls: ['./aliases.component.scss'],
    providers: []
})
export class AliasesComponent
    extends SubscriptionTracker
    implements OnInit, OnDestroy
{
    Aliases: any
    showDialog = false
    currentAlias: any
    count: number
    maxCount: number
    currentPage: number
    offset: number
    limitList: any
    visiblePagination: boolean
    trackingKey: boolean
    comment: boolean
    searchValue: any
    search: any
    loader: boolean
    copiedClipboard: boolean
    lastSendAliases = {
        offset: 0,
        count: 0,
        search: ''
    }
    appSearchShow: boolean
    selectionText: string
    highlightedText: boolean
    navIsOpen: boolean
    searchIsOpen: boolean = false
    linkTransact: any

    onIsVisible($event): void {
        this.searchIsOpen = $event
    }

    constructor(
        private httpService: HttpService,
        private cookieService: CookieService,
        private route: ActivatedRoute,
        private ngZone: NgZone,
        private mobileNavState: MobileNavState
    ) {
        super()
        this.maxCount = 1000
        this.visiblePagination = false
        this.copiedClipboard = false
        this.appSearchShow = true
        this.selectionText = ''
        this.highlightedText = false
        this.navIsOpen = false
    }

    ngOnInit() {
        this.currentPage = 1
        this.count = 20
        this.offset = 0
        this.search = ''
        this.route.params.pipe(take(1)).subscribe((params) => {
            this.search = params.id
        })
        if (this.cookieService.get('setCountAliasesCookie')) {
            this.count = parseInt(
                this.cookieService.get('setCountAliasesCookie'),
                10
            )
        }
        this.onChange()
    }

    onChange() {
        if (this.count > this.maxCount) {
            this.count = this.maxCount
        }
        if (!this.count) {
            this.count = 1
        }
        this.limitList = +this.count
        this.cookieService.set('setCountAliasesCookie', this.limitList)
        this.offset = (this.currentPage - 1) * this.count
        if (
            this.lastSendAliases.offset !== this.offset ||
            this.lastSendAliases.count !== this.count ||
            this.lastSendAliases.search !== this.search
        ) {
            this.lastSendAliases.offset = this.offset
            this.lastSendAliases.count = this.count
            this.lastSendAliases.search = this.search
            this.loader = true
            this.httpService
                .getAliases(this.offset, this.count, this.search)
                .pipe(take(1))
                .subscribe({
                    next: (data) => {
                        this.Aliases = data
                    },
                    error: (err) => {
                        console.log('getAliases', err)
                    },
                    complete: () => {
                        this.loader = false
                        this.visiblePagination = true
                    }
                })
        }
        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen
        })
    }

    nextPage() {
        if (this.Aliases.length >= +this.count) {
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

    selectText() {
        if (window.getSelection) {
            this.selectionText = window.getSelection().toString()
        }
        this.selectionText.replace(/\s/g, '') === ''
            ? (this.highlightedText = false)
            : (this.highlightedText = true)
    }

    public setAlias = (alias) => {
        this.currentAlias = alias
        window.location.hash = '#modalOpen'
        this.trackingKey = !(
            this.currentAlias.tracking_key.replace(/\s/g, '') === ''
        )
        this.comment = !(this.currentAlias.comment.replace(/\s/g, '') === '')
    }

    copyAddress() {
        window
            .getSelection()
            .selectAllChildren(document.getElementById('address-text'))
        document.execCommand('copy')
        this.copiedClipboard = true
        this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                this.ngZone.run(() => {
                    this.copiedClipboard = false
                })
            }, 2000)
        })
    }

    searchAlias() {
        this.currentPage = 1
        this.search = this.searchValue.replace(/\s/g, '')
        this.onChange()
    }

    ngOnDestroy() {
        super.ngOnDestroy()
    }
}
