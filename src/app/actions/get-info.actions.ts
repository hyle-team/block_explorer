export namespace DaemonInfos {
    export class Add {
        static readonly type = '[DaemonInfo] Add'
        constructor(public payload: any) {}
    }

    export class Get {
        static readonly type = '[DaemonInfo] Get'
        constructor() {}
    }
}
