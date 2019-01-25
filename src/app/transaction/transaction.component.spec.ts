import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { HttpService } from './../http.service';
import { DialogComponent } from './../dialog/dialog.component';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { BitNumberPipe, MoneyParsePipe } from '.././pipes.pipe';
import { MomentModule } from 'angular2-moment';

import { TransactionComponent } from './transaction.component';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransactionComponent,
        DialogComponent,
        BitNumberPipe,
        MoneyParsePipe,
      ],
      providers: [
        HttpService,
      ],
      imports: [
        HttpModule,
        RouterTestingModule,
        MomentModule
      ],


    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
