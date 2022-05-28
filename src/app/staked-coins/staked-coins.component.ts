import { Component, OnDestroy, OnInit } from '@angular/core'
import { SubscriptionTracker } from '../subscription-tracker/subscription-tracker'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { VisibilityInfo } from '../models/visibility-info'
import { VisibilityState } from 'app/states/visibility-state'

@Component({
    selector: 'app-staked-coins',
    templateUrl: './staked-coins.component.html',
    styleUrls: ['./staked-coins.component.scss']
})
export class StakedCoinsComponent
    extends SubscriptionTracker
    implements OnInit, OnDestroy
{
    title: string = 'Staked Coins (est)'
    amount: number = 0
    percentage: number = 0
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
                    this.amount = data[0].amount
                    this.percentage = data[0].percentage
                }
            })
        )
    }

    ngOnDestroy(): void {
        super.ngOnDestroy()
    }
}
