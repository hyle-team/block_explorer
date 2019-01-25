import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';
import {MobileNavState} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  navIsOpen: boolean;
  constructor(
    private router: Router,
    private mobileNavState: MobileNavState) {
    this.navIsOpen = true;

    router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.navIsOpen === true) {
          this.mobileNavState.toggleMenu();
        }
      }
    });
  }

  ngOnInit() {
    this.mobileNavState.change.subscribe(navIsOpen => {
      this.navIsOpen = navIsOpen;
    });
  }
  btnToggleMenu() {
    this.mobileNavState.toggleMenu();
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {

  }

}
