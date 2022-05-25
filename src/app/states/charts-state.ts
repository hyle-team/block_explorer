import { Injectable } from "@angular/core"
import { Action, Selector, State, StateContext } from "@ngxs/store"
import { Charts } from "app/actions/get-chart-actions"
import { HttpService } from "app/services/http.service"
import { tap } from "rxjs"

export class ChartsModel {
    AllCharts: any[]
    POSDifficulty: any[]
    POWDifficulty: any[]
    HashRate: any[]
    AverageBlockSize: any[]
    AverageTransactionsPerBlock: any[]
    ConfirmedTransactionsPerDay: any[]
}

@State<ChartsModel>({
    name: 'chartsstate',
    defaults: {
        AllCharts: [],
        POSDifficulty: [],
        POWDifficulty: [],
        HashRate: [],
        AverageBlockSize: [],
        AverageTransactionsPerBlock: [],
        ConfirmedTransactionsPerDay: []
    }
})
@Injectable()
export class ChartsState {
    constructor(private httpService: HttpService) {}

    @Selector()
    static selectAllCharts(state: ChartsModel) {
        return state.AllCharts
    }

    @Selector()
    static selectAllPOSDifficulty(state: ChartsModel) {
        return state.POSDifficulty
    }

    @Selector()
    static selectAllPOWDifficulty(state: ChartsModel) {
        return state.POWDifficulty
    }

    @Selector()
    static selectAllHashRate(state: ChartsModel) {
        return state.HashRate
    }

    @Selector()
    static selectAllAverageBlockSize(state: ChartsModel) {
        return state.AverageBlockSize
    }

    @Selector()
    static selectAllAverageTransactionsPerBlock(state: ChartsModel) {
        return state.AverageTransactionsPerBlock
    }

    @Selector()
    static selectAllConfirmedTransactionsPerDay(state: ChartsModel) {
        return state.ConfirmedTransactionsPerDay
    }

    @Action(Charts.GetAll)
    getAllChartDataFromState(ctx: StateContext<ChartsModel>) {
        return this.httpService.getChart('all', 'all').pipe(
            tap((returnData) => {
                const state = ctx.getState()
                ctx.setState({
                    ...state,
                    AllCharts: returnData
                })
            })
        )
    }

    @Action(Charts.GetPOSDifficulty)
    getAllPOSDifficultyDataFromState(ctx: StateContext<ChartsModel>) {
        return this.httpService.getChart('pos-difficulty', 'all').pipe(
            tap((returnData) => {
                const state = ctx.getState()
                ctx.setState({
                    ...state,
                    POSDifficulty: returnData
                })
            })
        )
    }

    @Action(Charts.GetPOWDifficulty)
    getAllPOWDifficultyDataFromState(ctx: StateContext<ChartsModel>) {
        return this.httpService.getChart('pow-difficulty', 'all').pipe(
            tap((returnData) => {
                const state = ctx.getState()
                ctx.setState({
                    ...state,
                    POWDifficulty: returnData
                })
            })
        )
    }

    @Action(Charts.GetHashRate)
    getAllHashRateFromState(ctx: StateContext<ChartsModel>) {
        return this.httpService.getChart('hashRate', 'all').pipe(
            tap((returnData) => {
                const state = ctx.getState()
                ctx.setState({
                    ...state,
                    HashRate: returnData
                })
            })
        )
    }

    @Action(Charts.GetAverageBlockSize)
    getAllAverageBlockSizeFromState(ctx: StateContext<ChartsModel>) {
        return this.httpService.getChart('AvgBlockSize', 'all').pipe(
            tap((returnData) => {
                const state = ctx.getState()
                ctx.setState({
                    ...state,
                    AverageBlockSize: returnData
                })
            })
        )
    }

    @Action(Charts.GetAverageTransactionsPerBlock)
    getAllAverageTransactionsPerBlockFromState(ctx: StateContext<ChartsModel>) {
        return this.httpService.getChart('AvgTransPerBlock', 'all').pipe(
            tap((returnData) => {
                const state = ctx.getState()
                ctx.setState({
                    ...state,
                    AverageTransactionsPerBlock: returnData
                })
            })
        )
    }

    @Action(Charts.GetConfirmedTransactionsPerDay)
    getAllConfirmedTransactionsPerDayFromState(ctx: StateContext<ChartsModel>) {
        return this.httpService.getChart('ConfirmTransactPerDay', 'all').pipe(
            tap((returnData) => {
                const state = ctx.getState()
                ctx.setState({
                    ...state,
                    ConfirmedTransactionsPerDay: returnData
                })
            })
        )
    }

}