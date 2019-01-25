import {Component, OnInit, OnDestroy, NgZone} from '@angular/core';
import {HttpService, MobileNavState} from '../http.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/map'
import {Subscription} from 'rxjs/Subscription';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-aliases',
  templateUrl: './aliases.component.html',
  styleUrls: ['./aliases.component.scss'],
  providers: [],
})
export class AliasesComponent implements OnInit, OnDestroy {
  Aliases: any;
  showDialog = false;
  currentAlias: any;
  count: number;
  maxCount: number;
  currentPage: number;
  offset: number;
  getAliasesSubscription: Subscription;
  limitList: any;
  visiblePagination: boolean;
  trackingKey: boolean;
  comment: boolean;
  searchValue: any;
  search: any;
  loader: boolean;
  copiedClipboard: boolean;
  lastSendAliases = {
    offset: 0,
    count: 0,
    search: ''
  };
  appSearchShow: boolean;
  selectionText: string;
  highlightedText: boolean;
  navIsOpen: boolean;
  searchIsOpen: boolean = false;
  linkTransact: any;

  onIsVisible($event): void {
    this.searchIsOpen = $event;
  }

  constructor(
    private httpService: HttpService,
    private _cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private mobileNavState: MobileNavState
  ) {
    this.maxCount = 1000;
    this.visiblePagination = false;
    this.copiedClipboard = false;
    this.appSearchShow = true;
    this.selectionText = '';
    this.highlightedText = false;
    this.navIsOpen = false;
  }

  ngOnInit() {
    this.currentPage = 1;
    this.count = 20;
    this.offset = 0;
    this.search = '';
    if (this._cookieService.get('setCountAliasesCookie')) {
      this.count = parseInt(this._cookieService.get('setCountAliasesCookie'), 10);
    }
    this.onChange();
  }

  onChange() {
    if (this.count > this.maxCount) {
      this.count = this.maxCount;
    }
    if (!this.count) {
      this.count = 1;
    }
    this.limitList = +this.count;
    this._cookieService.put('setCountAliasesCookie', this.limitList);
    this.offset = (this.currentPage - 1) * this.count;
    if (this.lastSendAliases.offset !== this.offset || this.lastSendAliases.count !== this.count || this.lastSendAliases.search !== this.search) {
      this.lastSendAliases.offset = this.offset;
      this.lastSendAliases.count = this.count;
      this.lastSendAliases.search = this.search;
      this.loader = true;
      if (this.getAliasesSubscription) {
        this.getAliasesSubscription.unsubscribe();
      }
      this.getAliasesSubscription = this.httpService.getAliases(this.offset, this.count, this.search).subscribe(
        data => {
          this.Aliases = data;
        }, err => {
          console.log('getAliases', err);
        }, () => {
          this.loader = false;
          this.visiblePagination = true;
        }
      );
    }
    this.mobileNavState.change.subscribe(navIsOpen => {
      this.navIsOpen = navIsOpen;
    });
  }

  nextPage() {
    if (this.Aliases.length >= +this.count) {
      this.currentPage++;
      this.onChange();
    }
  }

  prevPage() {
    if ((this.currentPage - 1) > 0) {
      this.currentPage--;
      this.onChange();
    }
  }

  selectText() {
    if (window.getSelection) {
      this.selectionText = window.getSelection().toString();
    }
    this.selectionText.replace(/\s/g,'') === '' ? this.highlightedText = false : this.highlightedText = true;
  }


  public setAlias = (alias) => {
    this.currentAlias = alias;
    window.location.hash = '#modalOpen';
    this.trackingKey = !(this.currentAlias.tracking_key.replace(/\s/g, '') === '');
    this.comment = !(this.currentAlias.comment.replace(/\s/g, '') === '');
  };

  copyAddress() {
    window.getSelection().selectAllChildren(document.getElementById('address-text'));
    document.execCommand('copy');
    this.copiedClipboard = true;
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.ngZone.run(() => {
          this.copiedClipboard = false;
        });
      }, 2000);
    });
  }

  searchAlias() {
    this.currentPage = 1;
    this.search = this.searchValue.replace(/\s/g, '');
    this.onChange();
  }

  ngOnDestroy() {
    if (this.getAliasesSubscription) {
      this.getAliasesSubscription.unsubscribe();
    }
  }

}
