//all
export interface BaseBlock {
    at: number
}
export interface Block extends BaseBlock {
    bcs: number
    trc: number
    d: number
    t: string
}

//AvgBlockSize
export interface AvgBlockSize extends BaseBlock {
    bcs: number
}

//AvgTransPerBlock
export interface AvgTransPerBlock extends BaseBlock {
    trc: number
}

//hashRate
export interface HashRate extends BaseBlock {
    d120: number
    h100: number
    h400: number
}

//pos-difficulty
export interface PosDifficulty extends BaseBlock {
    d: number
}

//pow-difficulty
export interface PowDifficulty extends BaseBlock {
    d: number
}

//ConfirmTransactPerDay
export interface ConfirmTransactPerDay extends BaseBlock {
    sum_trc: number
}
