import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-response-json',
  templateUrl: './response-json.component.html',
  styleUrls: ['./response-json.component.scss']
})
export class ResponseJsonComponent implements OnInit {
  info: any;
  InfoSubscription: Subscription;

  constructor(private httpService: HttpService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.InfoSubscription = this.httpService.getInfo().subscribe((data) => {
         this.info = data;
        }
    );

  }

}
