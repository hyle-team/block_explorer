import { Injectable, Output, EventEmitter, Directive } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { VisibilityInfo } from '../models/visibility-info'
import { GetInfo } from 'app/models/get-info'
import { Transaction_Pool } from 'app/models/transaction_pool'
import { BlockDetail } from 'app/models/block_detail'
import { MainBlockDetails } from 'app/models/main_block_details'
import { TransactionDetail } from 'app/models/transaction_detail'
import { AltBlockDetail } from 'app/models/alt-block-detail'
import { Aliases } from 'app/models/alias'

@Injectable()
export class HttpService {
    public serverApi = environment.backend

    constructor(protected httpClient: HttpClient) {}

    getInfo(): Observable<GetInfo> {
        const URL = `${this.serverApi}/get_info`
        return this.httpClient.get<GetInfo>(URL)
    }

    getVisibilityInfo(): Observable<VisibilityInfo> {
        const URL = `${this.serverApi}/get_visibility_info`
        return this.httpClient.get<VisibilityInfo>(URL)
    }

    // BlockChain Page
    public getBlockDetails(start: number, limit: number): Observable<BlockDetail[]> {
        const URL = `${this.serverApi}/get_blocks_details/${start}/${limit}`
        return this.httpClient.get<BlockDetail[]>(URL)
    }

    public getMainBlockDetails(id: any): Observable<MainBlockDetails> {
        const URL = `${this.serverApi}/get_main_block_details/${id}`
        return this.httpClient.get<MainBlockDetails>(URL)
    }

    public getTxPoolDetails(limit: number): Observable<Transaction_Pool[]> {
        const URL = `${this.serverApi}/get_tx_pool_details/${limit}`
        return this.httpClient.get<Transaction_Pool[]>(URL)
    }

    // Alt-blocks Page
    public getAltBlocks(offset: number, count: number): Observable<AltBlockDetail[]> {
        const URL = `${this.serverApi}/get_alt_blocks_details/${offset}/${count}`
        return this.httpClient.get<AltBlockDetail[]>(URL)
    }

    public getAltDetailBlock(id: any): Observable<AltBlockDetail> {
        const URL = `${this.serverApi}/get_alt_block_details/${id}`
        return this.httpClient.get<AltBlockDetail>(URL)
    }

    // Transaction Page
    public getTransaction(tx_hash: any): Observable<TransactionDetail> {
        const URL = `${this.serverApi}/get_tx_details/${tx_hash}`
        return this.httpClient.get<TransactionDetail>(URL)
    }

    public getConnectTransaction(amount, i): Observable<any> {
        const URL = `${this.serverApi}/get_out_info/${amount}/${i}`
        return this.httpClient.get(URL)
    }

    // Aliases Page
    public getAliases(
        offset: number,
        count: number,
        search: any
    ): Observable<Aliases[]> {
        if (!search) {
            search = 'all'
        }
        const URL = `${this.serverApi}/get_aliases/${offset}/${count}/${search}`
        return this.httpClient.get<Aliases[]>(URL)
    }

    public searchById(search: any): Observable<any> {
        const URL = `${this.serverApi}/search_by_id/${search}`
        return this.httpClient.get(URL)
    }

    public getChart(chart: any, period: string): Observable<any> {
        const URL = `${this.serverApi}/get_chart/${chart}/${period}`
        return this.httpClient.get<any>(URL)
    }
}

// MainInfo resolve
@Injectable()
export class ServiceResolver implements Resolve<any> {
    constructor(private service: HttpService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.service.getInfo()
    }
}

// AltBlock resolve
@Injectable()
export class ResolveAltBlock implements Resolve<any> {
    constructor(private service: HttpService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id: any = route.params['id']
        return this.service.getAltDetailBlock(id)
    }
}

@Directive({ selector: '[foo]' })
@Injectable()
export class MobileNavState {
    navIsOpen = true
    @Output() change: EventEmitter<boolean> = new EventEmitter()

    toggleMenu() {
        this.navIsOpen = this.navIsOpen !== true
        this.change.emit(this.navIsOpen)
    }
}
