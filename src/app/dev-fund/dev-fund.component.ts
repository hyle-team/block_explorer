import { Component, OnDestroy, OnInit } from '@angular/core'
import { SubscriptionTracker } from '../subscription-tracker/subscription-tracker'
import { Observable } from 'rxjs'
import { Select } from '@ngxs/store'
import { VisibilityInfo } from '../models/visibility-info'
import { VisibilityState } from 'app/states/visibility-state'

@Component({
    selector: 'app-dev-fund',
    templateUrl: './dev-fund.component.html',
    styleUrls: ['./dev-fund.component.scss']
})
export class DevFundComponent
    extends SubscriptionTracker
    implements OnInit, OnDestroy
{
    title: string = 'Dev Fund'
    amount: number = 0
    @Select(VisibilityState.selectVisibilityInfo) getVisibilityInfo$: Observable<
        VisibilityInfo[]
    >
    constructor() {
        super()
    }

    ngOnInit(): void {
        this._track(
            this.getVisibilityInfo$.subscribe((data) => {
                if (data.length === 1) {
                    this.amount = data[0].balance
                }
            })
        )
    }

    ngOnDestroy(): void {
        super.ngOnDestroy()
    }
}
