import { Component, OnInit } from '@angular/core'
import { SubscriptionTracker } from 'app/subscription-tracker/subscription-tracker'
import { environment } from 'environments/environment'

@Component({
    selector: 'app-api',
    templateUrl: './api.component.html',
    styleUrls: ['./api.component.scss']
})
export class ApiComponent extends SubscriptionTracker implements OnInit {
    objectLinks: any
    infoExample: any
    currentinfoExample: any
    getBlocksDetails: any
    getMainBlockDetails: any
    getAltBlocksDetails: any
    getAltBlockDetails: any
    geAllPoolTXlist: any
    getPoolTXSbriefDetails: any
    getTXdetails: any
    getTxIdsForPool: any
    apiEndpoint: string = `${environment.backend}/api`

    dropdowns = {
        info: false,
        blocks: false,
        block: false,
        altblocks: false,
        altblock: false,
        pool_transact: false,
        brief_pool_transact: false,
        transaction: false
    }

    constructor() {
        super()
    }

    ngOnDestroy(): void {
        super.ngOnDestroy()
    }

    createLink(bookmark: string): string {
        return `${environment.documentionApi}/reference/${bookmark}`
    }

    ngOnInit() {
        this.objectLinks = {
            url_request_format: `${environment.backend}/api/{method}/{param1}/{param2}`,
            utl_get_info: `${environment.backend}/api/get_info/4294967295`,
            utl_get_total_coins: `${environment.backend}/api/get_total_coins`,
            url_get_blocks_details: `${environment.backend}/api/get_blocks_details/{:offset}/{:count}`,
            url_get_main_block_details: `${environment.backend}/api/get_main_block_details/{:hash}`,
            url_get_alt_blocks_details: `${environment.backend}/api/get_alt_blocks_details/{:offset}/{:count}`,
            url_get_alt_block_details: `${environment.backend}/api/get_alt_block_details/{:hash}`,

            url_get_all_pool_tx_list: `${environment.backend}/api/get_all_pool_tx_list`,
            url_get_pool_txs_details: `${environment.backend}/api/get_pool_txs_details`,
            url_get_pool_txs_brief_details: `${environment.backend}/api/get_pool_txs_brief_details`,
            url_request_ids_all_txs_pool: `${environment.backend}/api/get_all_pool_tx_list`,

            url_get_tx_details: `${environment.backend}/api/get_tx_details/{:tx_hash}`
        }
        this.currentinfoExample = {
            total_coins: 15285792000000000
        }
        this.getTxIdsForPool = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                ids: [
                    '313f363308ec6e5ada8e2c7b5faec8a41ccebf87b0a5adcf978af080d2669f32',
                    '7300c0ac204304e068f5f7ea813974a557cd174193ac81253f5b1d17cbc32a43'
                ],
                status: 'OK'
            }
        }
        this.infoExample = {
            alias_count: 84,
            alt_blocks_count: 244,
            block_reward: 1000000000000,
            current_blocks_median: 125000,
            current_max_allowed_block_size: 250000,
            current_network_hashrate_350: 11097233049,
            current_network_hashrate_50: 0,
            daemon_network_state: 2,
            default_fee: 10000000000,
            expiration_median_timestamp: 0,
            grey_peerlist_size: 45,
            height: 18435,
            incoming_connections_count: 9,
            last_block_hash:
                'f36c1dab5a7eb04bb6ff504e38239b827ac572883277aa6908fc320a6e285d85',
            last_block_size: 0,
            last_block_timestamp: 1558424224,
            last_block_total_reward: 1000000000000,
            last_pos_timestamp: 0,
            last_pow_timestamp: 0,
            max_net_seen_height: 13374,
            mi: {
                build_no: 26,
                mode: 0,
                ver_major: 1,
                ver_minor: 0,
                ver_revision: 0
            },
            minimum_fee: 100000,
            net_time_delta_median: 0,
            offers_count: 0,
            outgoing_connections_count: 8,
            outs_stat: {
                amount_0_001: 0,
                amount_0_01: 0,
                amount_0_1: 0,
                amount_1: 0,
                amount_10: 0,
                amount_100: 0,
                amount_1000: 0,
                amount_10000: 0,
                amount_100000: 0,
                amount_1000000: 0
            },
            performance_data: {
                all_txs_insert_time_5: 0,
                block_processing_time_0: 0,
                block_processing_time_1: 0,
                etc_stuff_6: 0,
                insert_time_4: 0,
                longhash_calculating_time_3: 0,
                map_size: 0,
                raise_block_core_event: 0,
                target_calculating_calc: 0,
                target_calculating_enum_blocks: 0,
                target_calculating_time_2: 0,
                tx_add_one_tx_time: 0,
                tx_append_is_expired: 0,
                tx_append_rl_wait: 0,
                tx_append_time: 0,
                tx_check_exist: 0,
                tx_check_inputs_attachment_check: 0,
                tx_check_inputs_loop: 0,
                tx_check_inputs_loop_ch_in_val_sig: 0,
                tx_check_inputs_loop_kimage_check: 0,
                tx_check_inputs_loop_scan_outputkeys_get_item_size: 0,
                tx_check_inputs_loop_scan_outputkeys_loop: 0,
                tx_check_inputs_loop_scan_outputkeys_loop_find_tx: 0,
                tx_check_inputs_loop_scan_outputkeys_loop_get_subitem: 0,
                tx_check_inputs_loop_scan_outputkeys_loop_handle_output: 0,
                tx_check_inputs_loop_scan_outputkeys_relative_to_absolute: 0,
                tx_check_inputs_prefix_hash: 0,
                tx_check_inputs_time: 0,
                tx_count: 0,
                tx_prapare_append: 0,
                tx_print_log: 0,
                tx_process_attachment: 0,
                tx_process_extra: 0,
                tx_process_inputs: 0,
                tx_push_global_index: 0,
                tx_store_db: 0,
                writer_tx_count: 0
            },
            pos_allowed: true,
            pos_block_ts_shift_vs_actual: 0,
            pos_diff_total_coins_rate: 72,
            pos_difficulty: '1338766821857070584',
            pos_sequence_factor: 0,
            pow_difficulty: 1282748568346,
            pow_sequence_factor: 0,
            seconds_for_10_blocks: 0,
            seconds_for_30_blocks: 0,
            status: 'OK',
            synchronization_start_height: 9197,
            synchronized_connections_count: 17,
            total_coins: '17535637000000000000',
            transactions_cnt_per_day: 0,
            transactions_volume_per_day: 0,
            tx_count: 7391,
            tx_count_in_last_block: 0,
            tx_pool_performance_data: {
                begin_tx_time: 0,
                check_inputs_time: 0,
                check_inputs_types_supported_time: 0,
                check_keyimages_ws_ms_time: 0,
                db_commit_time: 0,
                expiration_validate_time: 0,
                tx_processing_time: 0,
                update_db_time: 0,
                validate_alias_time: 0,
                validate_amount_time: 0
            },
            tx_pool_size: 0,
            white_peerlist_size: 118,
            lastBlock: 18434
        }
        this.getBlocksDetails = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                blocks: [
                    {
                        actual_timestamp: 1557342434,
                        already_generated_coins: '17517218000000000000',
                        base_reward: 1000000000000,
                        blob: '',
                        block_cumulative_size: 0,
                        block_tself_size: 0,
                        cumulative_diff_adjusted: '3282279591',
                        cumulative_diff_precise: '167524457917',
                        difficulty: '130538538636',
                        effective_fee_median: 10000,
                        height: 15,
                        id: 'eb3e4d961b49f9204bbeb03cf481f98163d8ecc64a4e03dd945b4afba21a9a16',
                        is_orphan: false,
                        miner_text_info: '',
                        object_in_json:
                            '{\n  "major_version": 0, \n  "nonce": 13283431681344269557, \n  "prev_id": "5509f67bed3974b38c6b4a606d4aff1d6bcd20f9683cbc3fb872696ac18ff10c", \n  "minor_version": 0, \n  "timestamp": 1557342434, \n  "flags": 0, \n  "miner_tx": {\n    "version": 1, \n    "vin": [ {\n        "gen": {\n          "height": 15\n        }\n      }\n    ], \n    "vout": [ {\n        "amount": 1000000000000, \n        "target": {\n          "key": "79607cce59563520409181b5f389c7425af1c0e9c2f2649864f6c41170516e3300"\n        }\n      }\n    ], \n    "extra": [ {\n        "pub_key": "176379fe46749a3ba9d5ec14dda4577089faa9c7bbf44bbd0df1625e4f446693"\n      }, {\n        "extra_padding": , \n        "buff": [ ]\n      }, {\n        "derive_hint": , \n        "v": 57884\n      }, {\n        "unlock_time": , \n        "v": 25\n      }, {\n        "string": 8"7eae0ab0205f1c96"\n      }], \n    "signatures": [ ], \n    "attachment": [ ]\n  }, \n  "tx_hashes": [ ]\n}',
                        penalty: 0,
                        pow_seed: '',
                        prev_id:
                            '5509f67bed3974b38c6b4a606d4aff1d6bcd20f9683cbc3fb872696ac18ff10c',
                        summary_reward: 1000000000000,
                        this_block_fee_median: 0,
                        timestamp: 1557342434,
                        total_fee: 0,
                        total_txs_size: 0,
                        transactions_details: [
                            {
                                amount: 1000000000000,
                                blob: '',
                                blob_size: 96,
                                fee: 0,
                                id: 'c74bff5d8ee39d4d5f826a9f126f08579c2a07224941b5081a8702c6be8c336e',
                                keeper_block: 15,
                                object_in_json: '',
                                pub_key:
                                    '176379fe46749a3ba9d5ec14dda4577089faa9c7bbf44bbd0df1625e4f446693',
                                timestamp: 1557342434
                            }
                        ],
                        type: 1
                    },
                    {
                        actual_timestamp: 1557342468,
                        already_generated_coins: '17517219000000000000',
                        base_reward: 1000000000000,
                        blob: '',
                        block_cumulative_size: 0,
                        block_tself_size: 0,
                        cumulative_diff_adjusted: '8655175341',
                        cumulative_diff_precise: '569583156916',
                        difficulty: '402058698999',
                        effective_fee_median: 10000,
                        height: 16,
                        id: 'f5fc0e006e09447a114625b18783aae982b6ce5a6188c0fc25ed30e7be091eb1',
                        is_orphan: false,
                        miner_text_info: '',
                        object_in_json:
                            '{\n  "major_version": 0, \n  "nonce": 5846889378099009994, \n  "prev_id": "eb3e4d961b49f9204bbeb03cf481f98163d8ecc64a4e03dd945b4afba21a9a16", \n  "minor_version": 0, \n  "timestamp": 1557342468, \n  "flags": 0, \n  "miner_tx": {\n    "version": 1, \n    "vin": [ {\n        "gen": {\n          "height": 16\n        }\n      }\n    ], \n    "vout": [ {\n        "amount": 1000000000000, \n        "target": {\n          "key": "79018038084942c6131a71721bade001a1e7daefcbda6ab7317449062d1a018400"\n        }\n      }\n    ], \n    "extra": [ {\n        "pub_key": "b7bb28e9aa8b204cc61fdbf750da6ad40c7d281d9856b1873396f4faa7a6fe1e"\n      }, {\n        "extra_padding": , \n        "buff": [ ]\n      }, {\n        "derive_hint": , \n        "v": 33676\n      }, {\n        "unlock_time": , \n        "v": 26\n      }, {\n        "string": 8"addacf3d7bfd8059"\n      }], \n    "signatures": [ ], \n    "attachment": [ ]\n  }, \n  "tx_hashes": [ ]\n}',
                        penalty: 0,
                        pow_seed: '',
                        prev_id:
                            'eb3e4d961b49f9204bbeb03cf481f98163d8ecc64a4e03dd945b4afba21a9a16',
                        summary_reward: 1000000000000,
                        this_block_fee_median: 0,
                        timestamp: 1557342468,
                        total_fee: 0,
                        total_txs_size: 0,
                        transactions_details: [
                            {
                                amount: 1000000000000,
                                blob: '',
                                blob_size: 96,
                                fee: 0,
                                id: '6fb0924fc1f7cf3817a6a6f8d1b1d844620f9d05f47300e4722592ce7ef975fb',
                                keeper_block: 16,
                                object_in_json: '',
                                pub_key:
                                    'b7bb28e9aa8b204cc61fdbf750da6ad40c7d281d9856b1873396f4faa7a6fe1e',
                                timestamp: 1557342468
                            }
                        ],
                        type: 1
                    }
                ],
                status: 'OK'
            }
        }
        this.getMainBlockDetails = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                block_details: {
                    actual_timestamp: 1558426064,
                    already_generated_coins: '17535674000000000000',
                    base_reward: 1000000000000,
                    blob: '',
                    block_cumulative_size: 0,
                    block_tself_size: 0,
                    cumulative_diff_adjusted: '42262578814238839',
                    cumulative_diff_precise: '25589848530845512',
                    difficulty: '1320298929845',
                    effective_fee_median: 100000000,
                    height: 18471,
                    id: '2596f594631f2a080a17e8e366ef2b724722b64fc68f7188cf3d096066d473d3',
                    is_orphan: false,
                    miner_text_info: 'FairPool - \\�\u0010�',
                    object_in_json:
                        '{\n  "major_version": 1, \n  "nonce": 15244596551029238929, \n  "prev_id": "2df901ea6575315e36b2b4d80d52be6fe02903c55edfc6d8fb0f82690d9cf80c", \n  "minor_version": 0, \n  "timestamp": 1558426064, \n  "flags": 0, \n  "miner_tx": {\n    "version": 1, \n    "vin": [ {\n        "gen": {\n          "height": 18471\n        }\n      }\n    ], \n    "vout": [ {\n        "amount": 1000000000000, \n        "target": {\n          "key": "c1f522f367bbff21bc37a4403d002f9fa74b1f6aebf8e4008fa8601037a7af4c00"\n        }\n      }\n    ], \n    "extra": [ {\n        "pub_key": "62bdb11df19f68c2e6e0ed47c0dee6da180b14eff9d7b6caf8349896521369f1"\n      }, {\n        "user_data": , \n        "buff": 15"46616972506f6f6c202d205ce510b4"\n      }, {\n        "extra_padding": , \n        "buff": [ ]\n      }, {\n        "derive_hint": , \n        "v": 9647\n      }, {\n        "unlock_time": , \n        "v": 18481\n      }], \n    "signatures": [ ], \n    "attachment": [ ]\n  }, \n  "tx_hashes": [ ]\n}',
                    penalty: 0,
                    pow_seed: '',
                    prev_id:
                        '2df901ea6575315e36b2b4d80d52be6fe02903c55edfc6d8fb0f82690d9cf80c',
                    summary_reward: 1000000000000,
                    this_block_fee_median: 0,
                    timestamp: 1558426064,
                    total_fee: 0,
                    total_txs_size: 0,
                    transactions_details: [
                        {
                            amount: 1000000000000,
                            blob: '',
                            blob_size: 107,
                            fee: 0,
                            id: '8b76ebb4c0a092ee44ec69d216585ad240effab80d2b440fe6fd660a485df90b',
                            keeper_block: 18471,
                            object_in_json: '',
                            pub_key:
                                '62bdb11df19f68c2e6e0ed47c0dee6da180b14eff9d7b6caf8349896521369f1',
                            timestamp: 1558426064
                        }
                    ],
                    type: 1
                },
                status: 'OK'
            }
        }
        this.getAltBlocksDetails = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                blocks: [
                    {
                        actual_timestamp: 1558094670,
                        already_generated_coins: '0',
                        base_reward: 1000000000000,
                        blob: '',
                        block_cumulative_size: 0,
                        block_tself_size: 0,
                        cumulative_diff_adjusted: '34706049725298869',
                        cumulative_diff_precise: '4262505828114166444943',
                        difficulty: '1285998119732999977',
                        effective_fee_median: 0,
                        height: 13045,
                        id: '25d37f80e09699c94a37cb04032bec600b5ee5f8490228476e124f71009c7a07',
                        is_orphan: true,
                        miner_text_info: '',
                        object_in_json:
                            '{\n  "major_version": 1, \n  "nonce": 0, \n  "prev_id": "e7e22189111c6bef8c7448f726cd601b7bbe9ee47c74594e63968e40da125be6", \n  "minor_version": 0, \n  "timestamp": 1558095225, \n  "flags": 1, \n  "miner_tx": {\n    "version": 1, \n    "vin": [ {\n        "gen": {\n          "height": 13045\n        }\n      }, {\n        "key": {\n          "amount": 1000000000000, \n          "key_offsets": [ {\n              "uint64_t": 9588\n            }\n          ], \n          "k_image": "ee5af7d5279a75c73eb4696259b2c3f64506a3a050f8907f966d6bc47a1b2c15", \n          "etc_details": [ ]\n        }\n      }], \n    "vout": [ {\n        "amount": 1000000000000, \n        "target": {\n          "key": "a3c574d19d3ca2efcd71757c7d335751e8b690af89997aa6b3211aed3e54d21a00"\n        }\n      }, {\n        "amount": 1000000000000, \n        "target": {\n          "key": "33bba73077ae586d023bc20ec6eb405dc8a88ca4bcfbf953469d021046bd9fc400"\n        }\n      }\n    ], \n    "extra": [ {\n        "pub_key": "169056b8ff17af447d9d389b2c22ccbd4669b6b1f8f2fa6b1bb73da4fe1be9d8"\n      }, {\n        "extra_padding": , \n        "buff": [ ]\n      }, {\n        "derive_hint": , \n        "v": 31559\n      }, {\n        "unlock_time": , \n        "v": 13055\n      }, {\n        "etc_tx_time": , \n        "v": 1558094670\n      }], \n    "signatures": [ [ "97b3adb5c2431e856ab16f32a545e3dc557f53a5edeb98f02094e3617ba8120979d15ca8040da341e3fe19982a407b5c56776fbe6082d4f74d50f2db6e2f6a04"\n      ]\n    ], \n    "attachment": [ ]\n  }, \n  "tx_hashes": [ ]\n}',
                        penalty: 0,
                        pow_seed: '',
                        prev_id:
                            'e7e22189111c6bef8c7448f726cd601b7bbe9ee47c74594e63968e40da125be6',
                        summary_reward: 1000000000000,
                        this_block_fee_median: 0,
                        timestamp: 1558095225,
                        total_fee: 0,
                        total_txs_size: 0,
                        transactions_details: [
                            {
                                amount: 2000000000000,
                                blob: '',
                                blob_size: 184,
                                extra: [
                                    {
                                        datails_view: '',
                                        short_view:
                                            '169056b8ff17af447d9d389b2c22ccbd4669b6b1f8f2fa6b1bb73da4fe1be9d8',
                                        type: 'pub_key'
                                    },
                                    {
                                        datails_view: '',
                                        short_view: '0 bytes',
                                        type: 'extra_padding'
                                    },
                                    {
                                        datails_view: '477b',
                                        short_view: '477b',
                                        type: 'XOR'
                                    },
                                    {
                                        datails_view: '',
                                        short_view: 'height: 13055',
                                        type: 'unlock_time'
                                    },
                                    {
                                        datails_view: '',
                                        short_view:
                                            'timestamp: 1558094670 ��, 17 ��� 2019 12:04:30 GMT',
                                        type: 'pos_time'
                                    }
                                ],
                                fee: 0,
                                id: '6b547e0349018c699bbbe5e73ba6afdc55472c76539f77481a0fcf8242ca142d',
                                ins: [
                                    {
                                        amount: 0,
                                        kimage_or_ms_id: '',
                                        multisig_count: 0
                                    },
                                    {
                                        amount: 1000000000000,
                                        global_indexes: [9588],
                                        kimage_or_ms_id:
                                            'ee5af7d5279a75c73eb4696259b2c3f64506a3a050f8907f966d6bc47a1b2c15',
                                        multisig_count: 0
                                    }
                                ],
                                keeper_block: 0,
                                object_in_json: '',
                                outs: [
                                    {
                                        amount: 1000000000000,
                                        global_index: 0,
                                        is_spent: false,
                                        minimum_sigs: 0,
                                        pub_keys: [
                                            'a3c574d19d3ca2efcd71757c7d335751e8b690af89997aa6b3211aed3e54d21a'
                                        ]
                                    },
                                    {
                                        amount: 1000000000000,
                                        global_index: 0,
                                        is_spent: false,
                                        minimum_sigs: 0,
                                        pub_keys: [
                                            '33bba73077ae586d023bc20ec6eb405dc8a88ca4bcfbf953469d021046bd9fc4'
                                        ]
                                    }
                                ],
                                pub_key:
                                    '169056b8ff17af447d9d389b2c22ccbd4669b6b1f8f2fa6b1bb73da4fe1be9d8',
                                timestamp: 1558094670
                            }
                        ],
                        type: 0
                    },
                    {
                        actual_timestamp: 1558094702,
                        already_generated_coins: '0',
                        base_reward: 1000000000000,
                        blob: '',
                        block_cumulative_size: 0,
                        block_tself_size: 0,
                        cumulative_diff_adjusted: '34709324357663033',
                        cumulative_diff_precise: '4269216947363903966578',
                        difficulty: '1394217143233142329',
                        effective_fee_median: 0,
                        height: 13050,
                        id: '4b7e781b3e8565d92eab813711135e0dab4b4f91d5b904fb735fa46112df3fa7',
                        is_orphan: true,
                        miner_text_info: '',
                        object_in_json:
                            '{\n  "major_version": 1, \n  "nonce": 0, \n  "prev_id": "0384295fa43e5cdfdd640682cf49eb4062d9bc0daffff591d9d59601f748e157", \n  "minor_version": 0, \n  "timestamp": 1558094190, \n  "flags": 1, \n  "miner_tx": {\n    "version": 1, \n    "vin": [ {\n        "gen": {\n          "height": 13050\n        }\n      }, {\n        "key": {\n          "amount": 1000000000000, \n          "key_offsets": [ {\n              "uint64_t": 19767\n            }\n          ], \n          "k_image": "151ac71fcaff8e9a3ae578cbf452aa21a7e57a0485c00bde4007e4c9a10bf4d5", \n          "etc_details": [ ]\n        }\n      }], \n    "vout": [ {\n        "amount": 1000000000000, \n        "target": {\n          "key": "7d78c55a11372e148b4dd786040798c8f16c9e049c4220efb6aa1b1e05983ae400"\n        }\n      }, {\n        "amount": 1000000000000, \n        "target": {\n          "key": "a7f63d84a10e57507166b6c6c22f420cf582d585ec7e8cdaa91712cce311c00100"\n        }\n      }\n    ], \n    "extra": [ {\n        "pub_key": "f3f1c72301ff2691c532212374a57f7001a236d96106ded2a2c10dc756593551"\n      }, {\n        "extra_padding": , \n        "buff": [ ]\n      }, {\n        "derive_hint": , \n        "v": 51036\n      }, {\n        "unlock_time": , \n        "v": 13060\n      }, {\n        "etc_tx_time": , \n        "v": 1558094702\n      }], \n    "signatures": [ [ "ba43a17fb277fe191e5365fd966e7e3165d0252f85bb8dd77e2cde63d7fe630094cff11bd6dff360cb4b1213236e4dfc5d8cec27e625cc9e7d8296d08ebfab03"\n      ]\n    ], \n    "attachment": [ ]\n  }, \n  "tx_hashes": [ ]\n}',
                        penalty: 0,
                        pow_seed: '',
                        prev_id:
                            '0384295fa43e5cdfdd640682cf49eb4062d9bc0daffff591d9d59601f748e157',
                        summary_reward: 1000000000000,
                        this_block_fee_median: 0,
                        timestamp: 1558094190,
                        total_fee: 0,
                        total_txs_size: 0,
                        transactions_details: [
                            {
                                amount: 2000000000000,
                                blob: '',
                                blob_size: 184,
                                extra: [
                                    {
                                        datails_view: '',
                                        short_view:
                                            'f3f1c72301ff2691c532212374a57f7001a236d96106ded2a2c10dc756593551',
                                        type: 'pub_key'
                                    },
                                    {
                                        datails_view: '',
                                        short_view: '0 bytes',
                                        type: 'extra_padding'
                                    },
                                    {
                                        datails_view: '5cc7',
                                        short_view: '5cc7',
                                        type: 'XOR'
                                    },
                                    {
                                        datails_view: '',
                                        short_view: 'height: 13060',
                                        type: 'unlock_time'
                                    },
                                    {
                                        datails_view: '',
                                        short_view:
                                            'timestamp: 1558094702 ��, 17 ��� 2019 12:05:02 GMT',
                                        type: 'pos_time'
                                    }
                                ],
                                fee: 0,
                                id: 'b00883f1b2582329cb500eaab862b3884418b5511541a3372a211b63f0703916',
                                ins: [
                                    {
                                        amount: 0,
                                        kimage_or_ms_id: '',
                                        multisig_count: 0
                                    },
                                    {
                                        amount: 1000000000000,
                                        global_indexes: [19767],
                                        kimage_or_ms_id:
                                            '151ac71fcaff8e9a3ae578cbf452aa21a7e57a0485c00bde4007e4c9a10bf4d5',
                                        multisig_count: 0
                                    }
                                ],
                                keeper_block: 0,
                                object_in_json: '',
                                outs: [
                                    {
                                        amount: 1000000000000,
                                        global_index: 0,
                                        is_spent: false,
                                        minimum_sigs: 0,
                                        pub_keys: [
                                            '7d78c55a11372e148b4dd786040798c8f16c9e049c4220efb6aa1b1e05983ae4'
                                        ]
                                    },
                                    {
                                        amount: 1000000000000,
                                        global_index: 0,
                                        is_spent: false,
                                        minimum_sigs: 0,
                                        pub_keys: [
                                            'a7f63d84a10e57507166b6c6c22f420cf582d585ec7e8cdaa91712cce311c001'
                                        ]
                                    }
                                ],
                                pub_key:
                                    'f3f1c72301ff2691c532212374a57f7001a236d96106ded2a2c10dc756593551',
                                timestamp: 1558094702
                            }
                        ],
                        type: 0
                    }
                ],
                status: 'OK'
            }
        }
        this.getAltBlockDetails = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                block_details: {
                    actual_timestamp: 1558419387,
                    already_generated_coins: '0',
                    base_reward: 1000000000000,
                    blob: '',
                    block_cumulative_size: 0,
                    block_tself_size: 0,
                    cumulative_diff_adjusted: '42162003365591001',
                    cumulative_diff_precise: '7926104295724469470914',
                    difficulty: '1411116440694279750',
                    effective_fee_median: 0,
                    height: 18370,
                    id: '6b4ef341720ac37d6aaa9ebfa27c2a1b8e80a0cd4b39e02e8c9c60c7b8db8245',
                    is_orphan: true,
                    miner_text_info: '',
                    object_in_json:
                        '{\n  "major_version": 1, \n  "nonce": 0, \n  "prev_id": "f5fcfeb73404cf8b164fc28937e787c20d340779161942f2882c2aa165f27bdc", \n  "minor_version": 0, \n  "timestamp": 1558419630, \n  "flags": 1, \n  "miner_tx": {\n    "version": 1, \n    "vin": [ {\n        "gen": {\n          "height": 18370\n        }\n      }, {\n        "key": {\n          "amount": 1000000000000, \n          "key_offsets": [ {\n              "uint64_t": 5594\n            }\n          ], \n          "k_image": "867314b926fed0f076caefa3db4a91d0ab294bb724df38ec0a9c23213af33d0d", \n          "etc_details": [ ]\n        }\n      }], \n    "vout": [ {\n        "amount": 1000000000000, \n        "target": {\n          "key": "85665bf78f7d0eb3349d5ce84fa161c4c574e69a4d666002996eea64a446047800"\n        }\n      }, {\n        "amount": 1000000000000, \n        "target": {\n          "key": "4a71946f1f33dfb6d6524620637eb19b0f85060c2303eef07c972ae863abe96a00"\n        }\n      }\n    ], \n    "extra": [ {\n        "pub_key": "d5d4fa8984e7325457a8ad940ab8301428e490d0ac5dd63088e55a8f9d300f14"\n      }, {\n        "extra_padding": , \n        "buff": [ ]\n      }, {\n        "derive_hint": , \n        "v": 34232\n      }, {\n        "unlock_time": , \n        "v": 18380\n      }, {\n        "etc_tx_time": , \n        "v": 1558419387\n      }], \n    "signatures": [ [ "b5cf0f978977da69df1c38719ca7a753aadd9a3d40ca66037739e732908b6c099fd2948b1c2b224b73c7bc6ddd46987448fa7599020f0775a3971a010c836603"\n      ]\n    ], \n    "attachment": [ ]\n  }, \n  "tx_hashes": [ ]\n}',
                    penalty: 0,
                    pow_seed: '',
                    prev_id:
                        'f5fcfeb73404cf8b164fc28937e787c20d340779161942f2882c2aa165f27bdc',
                    summary_reward: 1000000000000,
                    this_block_fee_median: 0,
                    timestamp: 1558419630,
                    total_fee: 0,
                    total_txs_size: 0,
                    transactions_details: [
                        {
                            amount: 2000000000000,
                            blob: '',
                            blob_size: 186,
                            extra: [
                                {
                                    datails_view: '',
                                    short_view:
                                        'd5d4fa8984e7325457a8ad940ab8301428e490d0ac5dd63088e55a8f9d300f14',
                                    type: 'pub_key'
                                },
                                {
                                    datails_view: '',
                                    short_view: '0 bytes',
                                    type: 'extra_padding'
                                },
                                {
                                    datails_view: 'b885',
                                    short_view: 'b885',
                                    type: 'XOR'
                                },
                                {
                                    datails_view: '',
                                    short_view: 'height: 18380',
                                    type: 'unlock_time'
                                },
                                {
                                    datails_view: '',
                                    short_view:
                                        'timestamp: 1558419387 ��, 21 ��� 2019 06:16:27 GMT',
                                    type: 'pos_time'
                                }
                            ],
                            fee: 0,
                            id: 'ece86dd6c1f4b6ed9295f55700579fa6aba3b99e893de6fbbbfc74f2679a8dd5',
                            ins: [
                                {
                                    amount: 0,
                                    kimage_or_ms_id: '',
                                    multisig_count: 0
                                },
                                {
                                    amount: 1000000000000,
                                    global_indexes: [5594],
                                    kimage_or_ms_id:
                                        '867314b926fed0f076caefa3db4a91d0ab294bb724df38ec0a9c23213af33d0d',
                                    multisig_count: 0
                                }
                            ],
                            keeper_block: 0,
                            object_in_json: '',
                            outs: [
                                {
                                    amount: 1000000000000,
                                    global_index: 0,
                                    is_spent: false,
                                    minimum_sigs: 0,
                                    pub_keys: [
                                        '85665bf78f7d0eb3349d5ce84fa161c4c574e69a4d666002996eea64a4460478'
                                    ]
                                },
                                {
                                    amount: 1000000000000,
                                    global_index: 0,
                                    is_spent: false,
                                    minimum_sigs: 0,
                                    pub_keys: [
                                        '4a71946f1f33dfb6d6524620637eb19b0f85060c2303eef07c972ae863abe96a'
                                    ]
                                }
                            ],
                            pub_key:
                                'd5d4fa8984e7325457a8ad940ab8301428e490d0ac5dd63088e55a8f9d300f14',
                            timestamp: 1558419387
                        }
                    ],
                    type: 0
                },
                status: 'OK'
            }
        }
        this.geAllPoolTXlist = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                status: 'OK',
                txs: [
                    {
                        amount: 1999900000000,
                        blob: '',
                        blob_size: 1110,
                        fee: 100000000,
                        id: '31ab972b0f83f51f3daf4f500f335ced79bab8ef36d4b917f302eadf262fd256',
                        keeper_block: 0,
                        object_in_json: '',
                        pub_key:
                            '82f339a52f488b74354feed5475fbe964486011e8e924d539ffc3ef021538c72',
                        timestamp: 1558427600
                    }
                ]
            }
        }
        this.getPoolTXSbriefDetails = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                status: 'OK',
                txs: [
                    {
                        fee: 100000000,
                        id: '31ab972b0f83f51f3daf4f500f335ced79bab8ef36d4b917f302eadf262fd256',
                        sz: 1110,
                        total_amount: 1999900000000
                    }
                ]
            }
        }
        this.getTXdetails = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                status: 'OK',
                tx_info: {
                    amount: 1000000000000,
                    blob: '',
                    blob_size: 100,
                    extra: [
                        {
                            datails_view: '',
                            short_view:
                                '9da362eb8093d01748f630cdca5f2cc2fc53fd2d02c9884b0949c71ec307df96',
                            type: 'pub_key'
                        },
                        {
                            datails_view: '',
                            short_view: '0 bytes',
                            type: 'extra_padding'
                        },
                        {
                            datails_view: 'baeb',
                            short_view: 'baeb',
                            type: 'XOR'
                        },
                        {
                            datails_view: '',
                            short_view: 'height: 18499',
                            type: 'unlock_time'
                        },
                        {
                            datails_view: '4edab7612d547fcd',
                            short_view: '8 bytes',
                            type: 'string'
                        }
                    ],
                    fee: 0,
                    id: 'a4b5667df1bc19dc060894782971ae9e680f4ef3cce9d0619753ae3edc8aed58',
                    ins: [
                        {
                            amount: 0,
                            kimage_or_ms_id: '',
                            multisig_count: 0
                        }
                    ],
                    keeper_block: 18489,
                    object_in_json: '',
                    outs: [
                        {
                            amount: 1000000000000,
                            global_index: 27938,
                            is_spent: false,
                            minimum_sigs: 0,
                            pub_keys: [
                                '410031ac05c1b2bc213aff6770761cb61f42a8f2a266be4e6a0e9a7ff63b3e54'
                            ]
                        }
                    ],
                    pub_key:
                        '9da362eb8093d01748f630cdca5f2cc2fc53fd2d02c9884b0949c71ec307df96',
                    timestamp: 1558427116
                }
            }
        }
    }
    clickEvent(name: string) {
        this.dropdowns[name] = !this.dropdowns[name]
    }
}
