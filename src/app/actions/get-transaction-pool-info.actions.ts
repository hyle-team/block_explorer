import { Transaction_Pool } from "app/models/transaction_pool"

export namespace TransactionPoolInfos {
    export class Add {
        static readonly type = '[TransactionPoolInfos] Add'
        constructor(public payload: Transaction_Pool[]) {}
    }

    export class Get {
        static readonly type = '[TransactionPoolInfos] Get'
        constructor() {}
    }

    export class SetLimit {
        static readonly type = '[TransactionPoolInfos] SetLimit'
        constructor(public limit: number) {}
    }
}
