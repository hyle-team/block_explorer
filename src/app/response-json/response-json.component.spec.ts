import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseJsonComponent } from './response-json.component';

describe('ResponseJsonComponent', () => {
  let component: ResponseJsonComponent;
  let fixture: ComponentFixture<ResponseJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
