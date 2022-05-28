import { Injectable } from '@angular/core'
import { State, Selector, Action, StateContext } from '@ngxs/store'
import { patch } from '@ngxs/store/operators'
import { DaemonInfos } from '../actions/get-info.actions'
import { HttpService } from '../services/http.service'
import { tap } from 'rxjs'
import { GetInfo } from 'app/models/get-info'
import { Transaction_Pool } from 'app/models/transaction_pool'
import { TransactionPoolInfos } from 'app/actions/get-transaction-pool-info.actions'

export class InfoModel {
    GetInfos: GetInfo[]
}

@State<InfoModel>({
    name: 'appstate',
    defaults: {
        GetInfos: []
    }
})
@Injectable()
export class InfoState {
    constructor(private httpService: HttpService) {}

    @Selector()
    static selectDaemonInfo(state: InfoModel) {
        return state.GetInfos
    }

    @Action(DaemonInfos.Get)
    getDataFromState(ctx: StateContext<InfoModel>) {
        return this.httpService.getInfo().pipe(
            tap((returnData) => {
                const state = ctx.getState()

                ctx.setState({
                    ...state,
                    GetInfos: [returnData]
                })
            })
        )
    }

    @Action(DaemonInfos.Add)
    addDataToState(ctx: StateContext<InfoModel>, { payload }: DaemonInfos.Add) {
        const state = ctx.getState()

        ctx.setState({ ...state, GetInfos: [payload] })
    }
}

