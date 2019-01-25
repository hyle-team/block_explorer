import {Component, OnInit, OnDestroy, NgZone} from '@angular/core';
import {HttpService, MobileNavState} from '../http.service';
import {ActivatedRoute} from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss'],
  providers: [],
})
export class BlockchainComponent implements OnInit, OnDestroy  {
  info: any;
  height: number;
  infoHeight: number;
  posDifficulty: number;
  powDifficulty: number;
  totalCoins: number;
  NetworkHashrate: number;
  TxPoolDetails: any;
  BlockDetails: any;
  daemon_network_state: any;
  setLimit: any;
  limit: any;
  currentPage: number;
  goToBlock: number;
  setBlock: number;
  maxViewedBlockHeight: number;
  maxViewedPoolTimestamp: number;
  poolsOn: boolean;
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  poolLimit: number;
  setPoolLimit: number;
  setBlockValid: boolean;
  listBlockStart: number;
  maxCountBlock: number;
  txCount: number;
  lastSendBlockDetail = {
    start: 0,
    limit: 0
  };
  loader: boolean;
  navIsOpen: boolean;
  searchIsOpen: boolean = false;

  onIsVisible($event): void {
    this.searchIsOpen = $event;
  }

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private _cookieService: CookieService,
    private ngZone: NgZone,
    private mobileNavState: MobileNavState) {
    this.daemon_network_state = {
      0: 'Offline',
      1: 'Synchronizing',
      2: 'Online',
      3: 'Loading core',
      4: 'System error',
      5: 'Completing work'
    };
    this.maxCountBlock = 1000;
    this.poolsOn = true;
    this.setBlockValid = true;
    this.setLimit = 10;
    this.setPoolLimit = 5;
    this.loader = false;
    this.navIsOpen = false;
  }

  getInfoPrepare(data) {
    const lastHeight = (this.info) ? this.info.lastBlock : 0;
    const lastTransaction = (this.info) ? this.info.tx_pool_size : 0;
    this.info = data;
    if (this.info) {
      this.height = this.info.lastBlock;
      this.infoHeight = this.info.height;
      this.posDifficulty = this.info.pos_difficulty;
      this.powDifficulty = this.info.pow_difficulty;
      this.totalCoins = this.info.total_coins;
      this.txCount = this.info.tx_count;
      this.NetworkHashrate = this.info.current_network_hashrate_350;
      if ( lastHeight !== this.info.height ) {
        this.onChange();
      }
      if (lastTransaction !== this.info.tx_pool_size) {
        this.refreshPool();
      }
    }
  }

  ngOnInit() {
    this.poolLimit = this.setPoolLimit;
    if (this._cookieService.get('OnOffButtonCookie')) {
      if (this._cookieService.get('OnOffButtonCookie') === 'true') {
        this.poolsOn = true;
      } else if (this._cookieService.get('OnOffButtonCookie') === 'false') {
        this.poolsOn =  false;
      }
    } else {
      this.poolsOn = true;
    }
    if (this.poolsOn === true) {
      this.refreshPool();
    }
    if (this._cookieService.get('setLimitCookie')) {
      this.setLimit = parseInt(this._cookieService.get('setLimitCookie'), 10);
    }
    this.currentPage = 1;
    this.setBlock = null;

    this.getInfoPrepare( this.route.snapshot.data['MainInfo'] );

    this.subscription1 = this.httpService.subscribeInfo().subscribe(
      (data) => {
        this.getInfoPrepare( data );
      }
    );
    this.onChange();

    this.mobileNavState.change.subscribe(navIsOpen => {
      this.navIsOpen = navIsOpen;
    });
  }


  ngOnDestroy() {
    if (this.subscription1) { this.subscription1.unsubscribe(); }
    if (this.subscription2) { this.subscription2.unsubscribe(); }
    if (this.subscription3) { this.subscription3.unsubscribe(); }
  }


  onChangePoolLimit() {
    this.poolLimit = this.setPoolLimit;
    this.refreshPool();
  }


  toggleBtn() {
    this.poolsOn = !this.poolsOn;
    const exp = (new Date());
    exp.setMonth(exp.getMonth() + 3);
    this._cookieService.put('OnOffButtonCookie', String(this.poolsOn), {'expires': exp});
    if (this.poolsOn === true) {
      this.refreshPool();
    }
  }

  refreshPool() {
    if (this.subscription2) { this.subscription2.unsubscribe(); }
    this.subscription2 = this.httpService.getTxPoolDetails(this.poolLimit).subscribe(
      data => {
        this.TxPoolDetails = data;
        if (this.TxPoolDetails.length) {
          const self = this;
          if (this.maxViewedPoolTimestamp) {
            for (const item of this.TxPoolDetails) {
              item.isNew = (+item.timestamp > +this.maxViewedPoolTimestamp);
            }
            this.ngZone.runOutsideAngular(() => {
              setTimeout(() => {
                this.ngZone.run(() => {
                  for (const item of self.TxPoolDetails) {
                    item.isNew = false;
                  }
                });
              }, 2000);
            });
            if (+this.maxViewedPoolTimestamp < +this.TxPoolDetails[0].timestamp) {
              this.maxViewedPoolTimestamp = this.TxPoolDetails[0].timestamp;
            }
          } else {
            this.maxViewedPoolTimestamp = this.TxPoolDetails[0].timestamp;
          }
        }
      },
      err => console.error(err)
    );
  }

  prevPage() {
    if ( (this.currentPage - 1) > 0) {
      this.currentPage--;
      this.onChange();
    }
  }

  nextPage() {
    if (this.currentPage !== Math.ceil(this.height / this.limit)) {
      this.currentPage++;
      this.onChange();
    } else {
      return false;
    }
  }

  onChangeLimit() {
    if ( (isNaN(+this.goToBlock) === false && this.goToBlock !== undefined) && +this.goToBlock >= 0 && +this.goToBlock < this.height  ) {
      this.listBlockStart = (+this.goToBlock - +this.setLimit + 1) + (((this.height - 1) - +this.goToBlock) % +this.setLimit);
      this.currentPage = Math.floor((this.height - +this.setLimit - (this.listBlockStart + 1) ) / +this.setLimit) + 2;
    }
    this.onChange();
  }
  searchBlock() {
    this.goToBlock = this.setBlock;
    if ( isNaN(+this.goToBlock) || +this.goToBlock < 0 || +this.goToBlock >= this.height ) {
      this.setBlockValid = false;
      this.BlockDetails = [];
      return;
    }
    this.setBlockValid = true;
    this.listBlockStart = (+this.goToBlock - +this.setLimit + 1) + (((this.height - 1) - +this.goToBlock) % +this.setLimit);
    this.currentPage = Math.floor((this.height - +this.setLimit - (this.listBlockStart + 1) ) / +this.setLimit) + 2;
    this.onChange();
  }
  onChange() {
    if (this.setLimit > this.maxCountBlock) {
      this.setLimit = this.maxCountBlock;
    }
    if (!this.setLimit || this.setLimit < 0) {
      this.setLimit = 10;
    }
    this.listBlockStart = (this.height + 1) - +this.setLimit - ((this.currentPage - 1) * +this.setLimit);
    this.limit = +this.setLimit;

    this._cookieService.put('setLimitCookie', this.limit);

    if (this.info) {
      this.height = this.info.lastBlock;
      if ( (this.listBlockStart < 0) || (this.listBlockStart === null) ) {
        this.limit = this.limit + this.listBlockStart;
        if ( this.limit < 0 ) {
          this.BlockDetails = [];
          return;
        }
        this.listBlockStart = 0;
      }
      if (this.lastSendBlockDetail.start !== this.listBlockStart || this.lastSendBlockDetail.limit !== this.limit) {
        this.lastSendBlockDetail.start = this.listBlockStart;
        this.lastSendBlockDetail.limit = this.limit;
        if (this.subscription3) { this.subscription3.unsubscribe(); }
        this.loader = true;
        this.subscription3 = this.httpService.getBlockDetails(this.listBlockStart, this.limit).subscribe(
          data => {
            this.BlockDetails = data;
            if (this.BlockDetails.length) {
              const self = this;
              if (this.maxViewedBlockHeight) {
                for (const item of this.BlockDetails) {
                  item.isNew = (item.height > this.maxViewedBlockHeight);
                }
                this.ngZone.runOutsideAngular(() => {
                  setTimeout(() => {
                    this.ngZone.run(() => {
                      for (const item of self.BlockDetails) {
                        item.isNew = false;
                      }
                    });
                  }, 2000);
                });
                if (this.maxViewedBlockHeight < this.BlockDetails[this.BlockDetails.length - 1].height) {
                  this.maxViewedBlockHeight = this.BlockDetails[this.BlockDetails.length - 1].height;
                }
              } else {
                this.maxViewedBlockHeight = this.BlockDetails[this.BlockDetails.length - 1].height;
              }
              if (this.goToBlock && this.setBlockValid === true) {
                for (const row of this.BlockDetails) {
                  row.select = (row.height === +this.goToBlock);
                }
                this.ngZone.runOutsideAngular(() => {
                  setTimeout(() => {
                    this.ngZone.run(() => {
                      for (const row of self.BlockDetails) {
                        row.select = false;
                      }
                    });
                  }, 2000);
                });
              }
            }
          },
          err => this.BlockDetails = [],
          () => { this.loader = false; }
        );
      }
    }
  }
}
