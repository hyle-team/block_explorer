import {Component, OnInit, OnDestroy, NgZone, Input, Output, EventEmitter} from '@angular/core';
import {HttpService} from '../http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  setSearch: any;
  searchId: any = {};
  resultBlockSearch: any;
  public loading = true;
  subscription2: Subscription;
  subscription3: Subscription;
  searchNotFound: boolean;
  isVisibleInput: boolean;
  @Input() letGetInfo;
  @Output() isVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone) {
    this.searchNotFound = false;
    this.isVisibleInput = false;
  }


  searchFunc() {
    this.isVisibleInput = !this.isVisibleInput;
    this.isVisible.emit(this.isVisibleInput);
    this.setSearch = this.setSearch.replace(/\s/g, '');
    if (this.setSearch) {
      this.subscription2 = this.httpService.searchById(this.setSearch).subscribe(
        data => {
          this.searchId = data;

          if ((this.setSearch >= 1) && (this.setSearch <= 9999999)) {
            this.subscription3 = this.httpService.getBlockDetails(this.setSearch, 1).subscribe(
              result => {
                this.resultBlockSearch = result;
              },
              err => console.error(err),
              () => {
                if (this.resultBlockSearch.length) {
                  this.router.navigate(['/block', this.resultBlockSearch[0].id], { relativeTo: this.route})
                } else if (!this.resultBlockSearch.length) {
                  this.searchNotFound = true;
                  this.ngZone.runOutsideAngular(() => {
                    setTimeout(() => {
                      this.ngZone.run(() => {
                        this.searchNotFound = false;
                      });
                    }, 2000);
                  });
                }
              }
            );
          } else {
            if (this.searchId.result) {
              if (this.searchId.result === 'tx') {
                this.router.navigate(['/transaction', this.setSearch], {relativeTo: this.route});
              } else if (this.searchId.result === 'block') {
                this.router.navigate(['/block', this.setSearch], {relativeTo: this.route});
              } else if (this.searchId.result === 'alt_block') {
                this.router.navigate(['/alt-blocks', this.setSearch], {relativeTo: this.route});
              } else if (this.searchId.result === 'alias') {
                  this.router.navigate(['/aliases', this.setSearch], {relativeTo: this.route});
              } else {
                this.searchNotFound = true;
                this.ngZone.runOutsideAngular(() => {
                  setTimeout(() => {
                    this.ngZone.run(() => {
                      this.searchNotFound = false;
                    });
                  }, 2000);
                });
              }
            } else {
              this.searchNotFound = true;
              this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                  this.ngZone.run(() => {
                    this.searchNotFound = false;
                  });
                }, 2000);
              });
            }
          }
        },
        err => console.error(err)
      );
    }
  }


  onKeydown(event) {
    if (event.key === 'Enter') {
      this.searchFunc();
      localStorage.setItem('inputSearch', this.setSearch);
    }
    // Control+Backspace
    if (event.ctrlKey && event.which === 8) {
      localStorage.removeItem('inputSearch');
    }
    if (event.key === 'Backspace') {
      if (this.setSearch.length <= 1) {
        localStorage.removeItem('inputSearch');
      }
    }
  }

  ngOnInit() {
    if (localStorage.getItem('inputSearch') !== null) {
      this.setSearch = localStorage.getItem('inputSearch');
    }
    this.loading = false;
  }


  ngOnDestroy() {
    if (this.subscription2) { this.subscription2.unsubscribe(); }
    if (this.subscription3) { this.subscription3.unsubscribe(); }
  }
}
