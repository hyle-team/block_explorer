
export namespace BlockDetails {
    export class SetRange {
        static readonly type = '[BlockDetails] SetRange'
        constructor(public start: number, public limit: number) {}
    }
}
