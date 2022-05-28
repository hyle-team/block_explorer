import { Injectable, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

@Injectable()
export abstract class SubscriptionTracker implements OnDestroy {
    private subscriptions: Subscription[] = []

    ngOnDestroy(): void {
        this.subscriptions.forEach((x) => {
            if (x) x.unsubscribe()
        })
    }

    protected _track(...items: Subscription[]): void {
        this.subscriptions.push(...items)
    }
}
