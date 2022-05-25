export interface BlockDetail
{
    height: number
    actual_timestamp : number
    base_reward: string
    blob: string
    block_cumulative_size: string
    block_tself_size: string
    cumulative_diff_adjusted: string,
    cumulative_diff_precise: string,
    difficulty: string
    effective_fee_median: string
    id: string
    is_orphan: boolean
    penalty: string
    prev_id: string
    summary_reward: string
    this_block_fee_median: string
    timestamp: number
    total_fee: string
    total_txs_size: string
    tr_count: string,
    type: number
    miner_text_info: string
    pow_seed: string
}