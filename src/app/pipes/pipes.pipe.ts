import {
    ChangeDetectorRef,
    NgZone,
    OnDestroy,
    Pipe,
    PipeTransform
} from '@angular/core'


import BigNumber from 'bignumber.js'
import { environment } from 'environments/environment'
import { DateTime } from 'luxon';

// bit number format
@Pipe({
    name: 'bitNumber',
    pure: false,
    standalone: false
})
export class BitNumberPipe implements PipeTransform {
    transform(value: any) {
        if (isNaN(value)) {
            return String(value)
        }
        if (value === null) {
            return value
        }
        const string = value.toString()
        const arr = string.split('.')
        arr[0] = arr[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
        return arr.join(',')
    }
}

// money number format
@Pipe({
    name: 'moneyParse',
    pure: false,
    standalone: false
})
export class MoneyParsePipe implements PipeTransform {
    transform(
        value: any,
        decimalPlaces: number = environment.decimalPlaces,
        atomicUnits: number = 12
    ) {
        if (!!value) {
            value = value.toString().replace(/[^0-9]/g, '')
            const power = Math.pow(10, atomicUnits)
            let str = new BigNumber(value).div(power).toFixed(decimalPlaces)
            return str
        }
        return '0'
    }
}

@Pipe({
    name: 'hashPowerConverter',
    standalone: false
})
export class HashPowerConverterPipe implements PipeTransform {
    transform(value: number, args?: any): any {
        const PT = 1000000000000000 // PetaHash
        const TH = 1000000000000 // TeraHash
        const GH = 1000000000 // GigaHash
        const MH = 1000000 // MegaHash
        const KH = 1000 // KiloHash
        if (value && !isNaN(value)) {
            if (value >= PT) {
                return (
                    (value / PT).toFixed(3) +
                    ' ' +
                    (args === 'speed' ? 'PT/sec' : 'P')
                )
            } else if (value >= TH) {
                return (
                    (value / TH).toFixed(3) +
                    ' ' +
                    (args === 'speed' ? 'TH/sec' : 'T')
                )
            } else if (value >= GH) {
                return (
                    (value / GH).toFixed(3) +
                    ' ' +
                    (args === 'speed' ? 'GH/sec' : 'G')
                )
            } else if (value >= MH) {
                return (
                    (value / MH).toFixed(3) +
                    ' ' +
                    (args === 'speed' ? 'MH/sec' : 'M')
                )
            } else if (value >= KH) {
                return (
                    (value / KH).toFixed(3) +
                    ' ' +
                    (args === 'speed' ? 'KH/sec' : 'K')
                )
            } else {
                return value + ' ' + (args === 'speed' ? 'H/sec' : 'H')
            }
        } else if (value === 0) {
            return value + ' ' + (args === 'speed' ? 'H/sec' : 'H')
        }
    }
}

@Pipe({
    name: 'amTimeAgo',
    pure: false,
    standalone: false
})
export class TimeAgoPipe2 implements PipeTransform, OnDestroy {
    private currentTimer: number | null;
    private lastTime: number;
    private lastValue: string | number | Date | DateTime;
    private lastOmitSuffix: boolean;
    private lastText: string;
    private formatFn: (d: DateTime) => string;

    constructor(private cdRef: ChangeDetectorRef, private ngZone: NgZone) {}

    format(d: DateTime) {
        return d.toRelative({ style: this.lastOmitSuffix ? 'short' : 'long' });
    }

    transform(
        value: string | number | Date | DateTime,
        omitSuffix?: boolean,
        formatFn?: (d: DateTime) => string
    ): string {
        if (this.hasChanged(value, omitSuffix)) {
            this.lastTime = this.getTime(value);
            this.lastValue = value;
            this.lastOmitSuffix = omitSuffix;
            this.formatFn = formatFn || this.format.bind(this);
            this.removeTimer();
            this.createTimer();
            this.lastText = this.formatFn(this.toDateTime(value));
        } else {
            this.createTimer();
        }

        return this.lastText;
    }

    ngOnDestroy(): void {
        this.removeTimer();
    }

    private createTimer() {
        if (this.currentTimer) {
            return;
        }

        const dateTime = this.toDateTime(this.lastValue);
        const timeToUpdate = this.getSecondsUntilUpdate(dateTime) * 1000;

        this.currentTimer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.lastText = this.formatFn(this.toDateTime(this.lastValue));
                    this.currentTimer = null;
                    this.ngZone.run(() => this.cdRef.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });
    }

    private removeTimer() {
        if (this.currentTimer) {
            window.clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    }

    private getSecondsUntilUpdate(dateTime: DateTime) {
        const diff = Math.abs(DateTime.now().diff(dateTime).as('minutes'));
        if (diff < 1) {
            return 1;
        } else if (diff < 60) {
            return 30;
        } else if (diff < 180) {
            return 300;
        } else {
            return 3600;
        }
    }

    private hasChanged(
        value: string | number | Date | DateTime,
        omitSuffix?: boolean
    ): boolean {
        return (
            this.getTime(value) !== this.lastTime ||
            omitSuffix !== this.lastOmitSuffix
        );
    }

    private getTime(value: string | number | Date | DateTime): number {
        return this.toDateTime(value).toMillis();
    }

    private toDateTime(value: string | number | Date | DateTime): DateTime {
        if (DateTime.isDateTime(value)) {
            return value as DateTime;
        } else if (value instanceof Date) {
            return DateTime.fromJSDate(value);
        } else if (typeof value === 'number') {
            return DateTime.fromMillis(value);
        } else {
            let dt = DateTime.fromISO(value as string);
            if (!dt.isValid) {
                dt = DateTime.fromMillis(parseInt(value as string));
            }
            return dt;
        }
    }
}
