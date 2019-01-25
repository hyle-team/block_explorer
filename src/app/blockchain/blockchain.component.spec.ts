import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainComponent } from './blockchain.component';
import { MomentModule } from 'angular2-moment';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from './../http.service';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { OrderPipe, BitNumberPipe, TruncatePipe, TimeAgoPipe } from '.././pipes.pipe';


describe('BlockchainComponent', () => {
  let component: BlockchainComponent;
  let fixture: ComponentFixture<BlockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlockchainComponent,
        OrderPipe,
        BitNumberPipe,
        TruncatePipe,
        TimeAgoPipe
      ],
      providers: [
        HttpService,
        CookieService
      ],
      imports: [
        HttpModule,
        MomentModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
