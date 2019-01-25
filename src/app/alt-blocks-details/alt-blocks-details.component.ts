import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MobileNavState} from '../http.service';
import JSONbig from 'json-bigint';

@Component({
  selector: 'app-alt-blocks-details-component',
  templateUrl: './alt-blocks-details.component.html',
  styleUrls: ['./alt-blocks-details.component.scss'],
  providers: [],
})
export class AltBlocksDetailsComponent implements OnInit {
  altBlocksDetails: any = {};
  info: any;
  transactList: any;
  navIsOpen: boolean;
  searchIsOpen: boolean = false;
  onIsVisible($event): void {
    this.searchIsOpen = $event;
  }
  constructor(
    private route: ActivatedRoute,
    private mobileNavState: MobileNavState) {
    this.navIsOpen = false;
  }

  ngOnInit() {
    this.info = this.route.snapshot.data['MainInfo'];
    this.altBlocksDetails = this.route.snapshot.data['AltBlock'];
    this.transactList = JSONbig.parse(this.altBlocksDetails.transactions_details);

    this.mobileNavState.change.subscribe(navIsOpen => {
      this.navIsOpen = navIsOpen;
    });
  }
}

