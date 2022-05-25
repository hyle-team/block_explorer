import { VisibilityInfo } from "app/models/visibility-info"

export namespace VisibilityInfos {
    export class Add {
        static readonly type = '[VisibilityInfos] Add'
        constructor(public payload: VisibilityInfo) {}
    }

    export class Get {
        static readonly type = '[VisibilityInfos] Get'
        constructor() {}
    }
}
