import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpService, MobileNavState} from '../http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import JSONbig from 'json-bigint';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  providers: [],
})
export class TransactionComponent implements OnInit, OnDestroy {
  Transaction: any = {};
  tx_hash: any;
  keeperBlock: number;
  ExtraItem: any;
  info: any;
  height: number;
  posDifficulty: number;
  powDifficulty: number;
  totalCoins: number;
  NetworkHashrate: number;
  showDialogMixinCount = false;
  currentIndex: any;
  Inputs: any;
  connection;
  i: any;
  mixinCount;
  ConnectTransaction: any;
  link;
  Outputs: any[];
  confirmations: number;
  unconfirmed: boolean;
  inputsLimit = 10;
  outputsLimit = 10;
  subscription1: Subscription;
  subscription2: Subscription;
  subscription4: Subscription;
  subscription5: Subscription;
  subscription6: Subscription;
  subscription7: Subscription;
  blockHash: any;
  blockTimestamp: number;
  attachments: any;
  txCount: number;
  transactionNotFount: boolean;
  navBlockchain: any;
  navBlockchainMobile: any;

  navIsOpen: boolean;
  searchIsOpen: boolean = false;
  ImageMultisig: number;

  onIsVisible($event): void {
    this.searchIsOpen = $event;
  }

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router,
    private mobileNavState: MobileNavState) {
    this.transactionNotFount = false;
    this.navBlockchain = document.getElementById('blockchain-li');
    this.navBlockchainMobile = document.getElementById('blockchain-mobile-li');
    this.navIsOpen = false;
  }

  getInfoPrepare(data) {
    this.info = data;
    if (this.info) {
      this.height = this.info.height;
      this.posDifficulty = this.info.pos_difficulty;
      this.powDifficulty = this.info.pow_difficulty;
      this.totalCoins = this.info.total_coins;
      this.txCount = this.info.tx_count;
      this.NetworkHashrate = this.info.current_network_hashrate_350;
    }
  }

  ngOnInit() {
    this.navBlockchain.classList.add('active');
    this.navBlockchainMobile.classList.add('active');
    this.getInfoPrepare( this.route.snapshot.data['MainInfo'] );

    const self = this;
    this.subscription1 = this.route.params.subscribe(params => {
      this.tx_hash = params['tx_hash'];
      this.subscription2 = this.httpService.getTransaction(params.tx_hash).subscribe(
        data => {
          this.Transaction = data;
          this.keeperBlock = this.Transaction.keeper_block;
          if (this.keeperBlock >= 0) {
            // transaction confirmed
            this.unconfirmed = false;
            this.confirmations = self.info.height - this.keeperBlock;
            this.blockHash = this.Transaction.block_hash;
            this.blockTimestamp = this.Transaction.block_timestamp;

            this.ExtraItem = JSON.parse(this.Transaction.extra);

            // Inputs
            this.Inputs = JSONbig.parse(this.Transaction.ins);

            for (let inConn of this.Inputs) {
              let amount = inConn.amount.toString();
              let multisig = inConn.multisig_count;
                if (parseInt(amount, 10) !== 0 && multisig > 0) {
                  this.ImageMultisig = 1;
                } else if (parseInt(amount, 10) !== 0 && multisig === 0) {
                  this.ImageMultisig = 2;
                } else if (parseInt(amount, 10) === 0) {
                  this.ImageMultisig = 3;
                }
            }

            // Outputs
            this.Outputs = JSONbig.parse(this.Transaction.outs);
            if (this.Transaction.attachments) {
              this.attachments = JSON.parse(this.Transaction.attachments);
            }
          } else if (this.keeperBlock === -1) {
            // transaction unconfirmed
            this.unconfirmed = true;
            this.confirmations = 0;

            this.ExtraItem = this.Transaction.extra;
            this.Inputs = this.Transaction.ins;
            this.Outputs = this.Transaction.outs;
          } else {
            this.router.navigate(['/'], { relativeTo: this.route });
          }
        }, () => this.transactionNotFount = true
      )
    });

    this.subscription4 = this.httpService.subscribeInfo().subscribe((data) => {
      this.getInfoPrepare( data );
    });
    this.mobileNavState.change.subscribe(navIsOpen => {
      this.navIsOpen = navIsOpen;
    });
  }



  // Get Connect Transaction
  getConnectTransaction = (connection) => {
    this.connection = connection;
    this.i = 1;
    this.mixinCount = connection.global_indexes.length;
    this.subscription5 = this.httpService.getConnectTransaction(this.connection.amount, this.i).subscribe(
      data => {
        this.ConnectTransaction = data;
      },
      err => console.error(err)
    );
  };

  // Click Mixin Count (inside pop-up)
  SetIndexItem = (index) => {
    this.currentIndex = index;
    this.subscription6 = this.httpService.getConnectTransaction(this.connection.amount, this.currentIndex).subscribe(
      data => {
        this.ConnectTransaction = data;
        this.link = this.ConnectTransaction.tx_id;
        this.router.navigate(['/transaction', this.link], { relativeTo: this.route });
        this.showDialogMixinCount = false;
      },
      err => console.error(err),
    );
  };


  // Global Index Click
  goToTransaction(connection) {
    this.connection = connection;
    this.currentIndex = this.connection.global_indexes[0];

    this.subscription7 = this.httpService.getConnectTransaction(this.connection.amount, this.currentIndex).subscribe(
      data => {
        this.ConnectTransaction = data;
        this.link = this.ConnectTransaction.tx_id;
        this.router.navigate(['/transaction', this.link], { relativeTo: this.route });
        this.showDialogMixinCount = false;
      },
      err => console.error(err),
    );
  }

  ngOnDestroy() {
    if (this.subscription1) { this.subscription1.unsubscribe(); }
    if (this.subscription2) { this.subscription2.unsubscribe(); }
    if (this.subscription4) { this.subscription4.unsubscribe(); }
    if (this.subscription5) { this.subscription5.unsubscribe(); }
    if (this.subscription6) { this.subscription6.unsubscribe(); }
    if (this.subscription7) { this.subscription7.unsubscribe(); }
    this.navBlockchain.classList.remove('active');
    this.navBlockchainMobile.classList.remove('active');
  }

}
