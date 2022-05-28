export namespace Charts {
    export class GetAll {
        static readonly type = '[Charts] GetAll'
        constructor() {}
    }

    export class GetPOSDifficulty {
        static readonly type = '[Charts] GetPOSDifficulty'
        constructor() {}
    }

    export class GetPOWDifficulty {
        static readonly type = '[Charts] GetPOWDifficulty'
        constructor() {}
    }

    export class GetHashRate {
        static readonly type = '[Charts] GetHashRate'
        constructor() {}
    }

    export class GetAverageBlockSize {
        static readonly type = '[Charts] GetAverageBlockSize'
        constructor() {}
    }

    export class GetAverageTransactionsPerBlock {
        static readonly type = '[Charts] GetAverageTransactionsPerBlock'
        constructor() {}
    }

    export class GetConfirmedTransactionsPerDay {
        static readonly type = '[Charts] GetConfirmedTransactionsPerDay'
        constructor() {}
    }
}