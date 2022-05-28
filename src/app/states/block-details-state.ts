import { Injectable } from '@angular/core'
import { State, Selector, Action, StateContext } from '@ngxs/store'
import { HttpService } from '../services/http.service'
import { tap } from 'rxjs'
import { BlockDetail } from 'app/models/block_detail'
import { BlockDetails } from 'app/actions/get-block-details.actions'

export class BlockDetailsModel {
    BlockDetails: BlockDetail[]
}

@State<BlockDetailsModel>({
    name: 'blockdetailsstate',
    defaults: {
        BlockDetails: []
    }
})
@Injectable()
export class BlockDetailsState {
    constructor(private httpService: HttpService) {}

    @Selector()
    static selectRangeOfBlockDetails(state: BlockDetailsModel) {
        return state.BlockDetails
    }

    @Action(BlockDetails.SetRange)
    updateLimit(ctx: StateContext<BlockDetailsModel>, {start, limit}: BlockDetails.SetRange) {
        return this.httpService.getBlockDetails(start, limit).pipe(
            tap((returnData) => {
                const state = ctx.getState()
                ctx.setState({
                    ...state,
                    BlockDetails: returnData.reverse()
                })
            })
        )
    }
}