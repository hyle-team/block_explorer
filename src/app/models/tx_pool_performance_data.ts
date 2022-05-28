export interface Tx_Pool_Performance_Data {
    begin_tx_time: number,
    check_inputs_time: number,
    check_inputs_types_supported_time: number,
    check_keyimages_ws_ms_time: number,
    db_commit_time: number,
    expiration_validate_time: number,
    tx_processing_time: number,
    update_db_time: number,
    validate_alias_time: number,
    validate_amount_time: number
}