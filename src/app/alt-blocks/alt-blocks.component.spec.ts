import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltBlocksComponent } from './alt-blocks.component';
import { MomentModule } from 'angular2-moment';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from './../http.service';
import { HttpModule } from '@angular/http';

describe('AltBlocksComponent', () => {
  let component: AltBlocksComponent;
  let fixture: ComponentFixture<AltBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AltBlocksComponent
      ],
      providers: [
        HttpService,
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
    fixture = TestBed.createComponent(AltBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
