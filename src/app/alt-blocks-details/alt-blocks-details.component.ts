import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SubscriptionTracker } from '../subscription-tracker/subscription-tracker'
import { MobileNavState } from '../services/http.service'

@Component({
    selector: 'app-alt-blocks-details-component',
    templateUrl: './alt-blocks-details.component.html',
    styleUrls: ['./alt-blocks-details.component.scss'],
    providers: []
})
export class AltBlocksDetailsComponent
    extends SubscriptionTracker
    implements OnInit
{
    altBlocksDetails: any = {}
    info: any
    transactList: any
    navIsOpen: boolean
    searchIsOpen: boolean = false
    onIsVisible($event): void {
        this.searchIsOpen = $event
    }
    constructor(
        private route: ActivatedRoute,
        private mobileNavState: MobileNavState
    ) {
        super()
        this.navIsOpen = false
    }

    ngOnInit() {
        this.info = this.route.snapshot.data['MainInfo']
        this.altBlocksDetails = this.route.snapshot.data['AltBlock']

        try {
            this.transactList = JSON.parse(
                this.altBlocksDetails.transactions_details
            )
        } catch (error) {
            console.log(error)
        }

        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen
        })
    }
}
