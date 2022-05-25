import { NgModule } from '@angular/core'
import {
    BitNumberPipe,
    HashPowerConverterPipe,
    MoneyParsePipe,
    TimeAgoPipe2
} from 'app/pipes/pipes.pipe'

@NgModule({
    declarations: [
        BitNumberPipe,
        MoneyParsePipe,
        HashPowerConverterPipe,
        TimeAgoPipe2
    ],
    exports: [
        BitNumberPipe,
        MoneyParsePipe,
        HashPowerConverterPipe,
        TimeAgoPipe2
    ]
})
export class PipesModule {}
