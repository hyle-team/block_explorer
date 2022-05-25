import { Injectable } from '@angular/core'
import { State, Selector, Action, StateContext } from '@ngxs/store'
import { patch } from '@ngxs/store/operators'
import { HttpService } from '../services/http.service'
import { tap } from 'rxjs'
import { Transaction_Pool } from 'app/models/transaction_pool'
import { TransactionPoolInfos } from 'app/actions/get-transaction-pool-info.actions'
import { environment } from 'environments/environment'

export class TransactionPoolModel {
    TransactionPoolInfos: Transaction_Pool[]
    limit: number
}

@State<TransactionPoolModel>({
    name: 'transactionpoolstate',
    defaults: {
        TransactionPoolInfos: [],
        limit: environment.transactionPoolLimit
    }
})
@Injectable()
export class TransactionPoolState {
    constructor(private httpService: HttpService) {}

    @Selector()
    static selectAllTransactionPoolInfo(state: TransactionPoolModel) {
        return state.TransactionPoolInfos
    }

    @Selector()
    static selectLimitedTransactionPoolInfo(state: TransactionPoolModel) {
        return state.TransactionPoolInfos.slice(0, state.limit)
    }

    @Action(TransactionPoolInfos.SetLimit)
    updateLimit({patchState}: StateContext<TransactionPoolModel>, {limit}: TransactionPoolInfos.SetLimit) {
        patchState({limit: limit})
    }

    @Action(TransactionPoolInfos.Get)
    getTransactionPoolDataFromState(ctx: StateContext<TransactionPoolModel>) {
        return this.httpService.getTxPoolDetails(0).pipe(
            tap((returnData) => {
                const state = ctx.getState()
                ctx.setState({
                    ...state,
                    TransactionPoolInfos: returnData
                })
            })
        )
    }

    @Action(TransactionPoolInfos.Add)
    addTransactionPoolDataToState(
        ctx: StateContext<TransactionPoolModel>,
        { payload }: TransactionPoolInfos.Add
    ) {
        const state = ctx.getState()
        ctx.setState({ ...state, TransactionPoolInfos: payload })
    }
}

