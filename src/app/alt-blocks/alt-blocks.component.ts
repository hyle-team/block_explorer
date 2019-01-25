import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map'
import {HttpService, MobileNavState} from '../http.service';
import {Subscription} from 'rxjs/Subscription';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-alt-blocks',
  templateUrl: './alt-blocks.component.html',
  styleUrls: ['./alt-blocks.component.scss'],
  providers: [],
})

export class AltBlocksComponent implements OnInit, OnDestroy {
  altBlocks: any;
  getAltBlocksSubscription: Subscription;
  count: number;
  maxCount: number;
  currentPage: number;
  offset: number;
  limitList: any;
  visiblePagination: boolean;
  loader: boolean;
  navIsOpen: boolean;
  searchIsOpen: boolean = false;

  onIsVisible($event): void {
    this.searchIsOpen = $event;
  }

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private _cookieService: CookieService,
    private mobileNavState: MobileNavState
  ) {
    this.maxCount = 1000;
    this.visiblePagination = false;
    this.navIsOpen = false;
  }

  ngOnInit() {
    this.currentPage = 1;
    this.count = 20;
    this.offset = 0;
    if (this._cookieService.get('setCountAltBlocksCookie')) {
      this.count = parseInt(this._cookieService.get('setCountAltBlocksCookie'), 10);
    }
    this.onChange();

    this.mobileNavState.change.subscribe(navIsOpen => {
      this.navIsOpen = navIsOpen;
    });
  }

  onChange() {
    this.loader = true;
    if (this.count > this.maxCount) {
      this.count = this.maxCount;
    }
    if (!this.count) {
      this.count = 1;
    }
    this.limitList = +this.count;
    this._cookieService.put('setCountAltBlocksCookie', this.limitList);
    this.offset = (this.currentPage - 1) * this.count;
    this.getAltBlocksSubscription = this.httpService.getAltBlocks(this.offset, this.count).subscribe(
      data => {
        this.altBlocks = data;
        for (let i = 0; i < this.altBlocks.length; i++) {
          this.altBlocks[i].transactions_details = JSON.parse(this.altBlocks[i].transactions_details);
        }
      }, err => {
        console.log('getAltBlocks', err);
      },
      () => {
        this.loader = false;
        this.visiblePagination = true;
      }
    );
  }

  nextPage() {
    if (this.altBlocks.length >= +this.count) {
      this.currentPage++;
      this.onChange();
    }
  }

  prevPage() {
    if ( (this.currentPage - 1) > 0) {
      this.currentPage--;
      this.onChange();
    }
  }

  ngOnDestroy() {
    if (this.getAltBlocksSubscription) { this.getAltBlocksSubscription.unsubscribe(); }
  }

}


