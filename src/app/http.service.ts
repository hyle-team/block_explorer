import {Injectable, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Subject} from 'rxjs/Subject';
import {environment} from '../environments/environment';

@Injectable()
export class HttpService {
  private serverApi = '';
  private Info = new Subject<any>();
  private infoObj: any;

  constructor(protected http: HttpClient, private router: Router) {
    if (!environment.production) {
      this.serverApi = 'http://localhost:8008';
    }
    const self = this;


    function getTimeOut() {
      setTimeout(function () {
        self.http.get(self.serverApi + '/get_info').toPromise()
          .then(response => {
            self.infoObj = response;
            self.Info.next(self.infoObj);
            if (router.url === '/server-error') {
              router.navigate(['/']);
            }
            getTimeOut();
          })
          .catch(() => {
            router.navigate(['/server-error']);
            getTimeOut();
          })
      }, 6000);
    }
    getTimeOut();
  }

  subscribeInfo() {
    return this.Info.asObservable();
  }

  getInfo(): Observable<Response> {
    if (this.infoObj === undefined) {
      const URL = `${this.serverApi}/get_info`;
      return this.http.get(URL).map(response => {
        this.infoObj = response;
        return this.infoObj;
      });
    } else {
      return this.infoObj;
    }
  }

  // BlockChain Page
  public getTxPoolDetails(limit: number) {
    const URL = `${this.serverApi}/get_tx_pool_details`;
    return this.http.post(URL, JSON.stringify({count: limit})).map((response) => {
      return response;
    });
  }
  public getBlockDetails(start: number, limit: number) {
    const URL = `${this.serverApi}/get_blocks_details`;
    return this.http.post(URL, JSON.stringify({start: start, count: limit}))
  }
  public getMainBlockDetails(id: any) {
    const URL = `${this.serverApi}/get_main_block_details`;
    return this.http.post(URL, JSON.stringify({id: id})).map(response => response);
  }


  // Alt-blocks Page
  public getAltBlocks(offset: number, count: number) {
    const URL = `${this.serverApi}/get_alt_blocks_details`;
    return this.http.post(URL, JSON.stringify({offset: offset, count: count})).map((response) => {
      return response;
    });
  }
  public getAltDetailBlock(id: any){
    const URL = `${this.serverApi}/get_alt_block_details`;
    return this.http.post(URL, JSON.stringify({id: id})).map((response ) => {
      return response;
    });
  }

  // Transaction Page
  public getTransaction(tx_hash: any) {
    const URL = `${this.serverApi}/get_tx_details`;
    return this.http.post(URL, JSON.stringify({tx_hash: tx_hash})).map((response) => {
      return response;
    });
  }
  public getConnectTransaction(amount, i) {
    const URL = `${this.serverApi}/get_out_info`;
    return this.http.post(URL, JSON.stringify({amount: amount, i: i})).map((response) => {
      return response;
    });
  }

  // Aliases Page
  public getAliases(offset: number, count: number, search: any) {
    const URL = `${this.serverApi}/get_aliases`;
    return this.http.post(URL, JSON.stringify({offset: offset, count: count, search: search})).map((response) => {
      return response;
    });
  }

  public searchById(search: any) {
    const URL = `${this.serverApi}/search_by_id`;
    return this.http.post(URL, JSON.stringify({id: search})).map((response) => {
      return response;
    });
  }
  public getChart(chart: any) {
    const URL = `${this.serverApi}/get_chart`;
    return this.http.post(URL, JSON.stringify({chart: chart})).map((response) => {
      return response;
    });
  }

}


// MainInfo resolve
@Injectable()
export class ServiceResolver implements Resolve<any> {
  constructor(private service: HttpService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getInfo();
  }
}

// AltBlock resolve
@Injectable()
export class ResolveAltBlock implements Resolve<any> {
  constructor(private service: HttpService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    const id: any = route.params['id'];
    return this.service.getAltDetailBlock(id);
  }
}

@Injectable()
export class MobileNavState {
  navIsOpen = true;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggleMenu() {
    this.navIsOpen = this.navIsOpen !== true;
    this.change.emit(this.navIsOpen);
  }
}
