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
  search: any;
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
    this.search = this.setSearch.replace(/\s/g, '');
    if (this.search) {
      this.subscription2 = this.httpService.searchById(this.search).subscribe(
        data => {
          this.searchId = data;

          if ((this.search >= 1) && (this.search <= 9999999)) {
            this.subscription3 = this.httpService.getBlockDetails(this.search, 1).subscribe(
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
                this.router.navigate(['/transaction', this.search], {relativeTo: this.route});
              } else if (this.searchId.result === 'block') {
                this.router.navigate(['/block', this.search], {relativeTo: this.route});
              } else if (this.searchId.result === 'alt_block') {
                this.router.navigate(['/alt-blocks', this.search], {relativeTo: this.route});
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
    this.setSearch = '';
  }


  onKeydown(event) {
    this.searchFunc();
    this.setSearch = '';
  }

  ngOnInit() {
    this.setSearch = '';
    this.loading = false;
  }


  ngOnDestroy() {
    if (this.subscription2) { this.subscription2.unsubscribe(); }
    if (this.subscription3) { this.subscription3.unsubscribe(); }
  }

}
