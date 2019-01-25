import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServerErrorComponent implements OnInit {
  public loading = false;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loading = false;
  }

}
