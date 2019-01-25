import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoComponent } from './main-info.component';
import {BitNumberPipe} from '.././pipes.pipe';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpService} from './../http.service';

describe('MainInfoComponent', () => {
  let component: MainInfoComponent;
  let fixture: ComponentFixture<MainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainInfoComponent,
        BitNumberPipe
      ],
      providers: [
        HttpService
      ],
      imports: [
        HttpModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
