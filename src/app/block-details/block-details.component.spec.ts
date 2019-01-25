import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDetailsComponent } from './block-details.component';
import { BitNumberPipe, MoneyParsePipe } from '.././pipes.pipe';
import { MomentModule } from 'angular2-moment';
import { HttpModule } from '@angular/http';
import { HttpService } from './../http.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlockDetailsComponent', () => {
  let component: BlockDetailsComponent;
  let fixture: ComponentFixture<BlockDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlockDetailsComponent,
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
    fixture = TestBed.createComponent(BlockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
