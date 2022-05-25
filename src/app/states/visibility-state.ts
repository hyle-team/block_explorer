import { Injectable } from "@angular/core"
import { Action, Selector, State, StateContext } from "@ngxs/store"
import { VisibilityInfos } from "app/actions/get-visibility-info.actions"
import { VisibilityInfo } from "app/models/visibility-info"
import { HttpService } from "app/services/http.service"
import { tap } from "rxjs"

export class VisibilityModel {
    VisibilityInfos: VisibilityInfo[]
}

@State<VisibilityModel>({
    name: 'visibilitystate',
    defaults: {
        VisibilityInfos: []
    }
})
@Injectable()
export class VisibilityState {
    constructor(private httpService: HttpService) {}

    @Selector()
    static selectVisibilityInfo(state: VisibilityModel) {
        return state.VisibilityInfos
    }

    @Action(VisibilityInfos.Get)
    getVisibilityDataFromState(ctx: StateContext<VisibilityModel>) {
        return this.httpService.getVisibilityInfo().pipe(
            tap((returnData) => {
                const state = ctx.getState()
                ctx.setState({
                    ...state,
                    VisibilityInfos: [returnData]
                })
            })
        )
    }

    @Action(VisibilityInfos.Add)
    addVisibilityDataToState(
        ctx: StateContext<VisibilityModel>,
        { payload }: VisibilityInfos.Add
    ) {
        const state = ctx.getState()

        ctx.setState({ ...state, VisibilityInfos: [payload] })
    }
}