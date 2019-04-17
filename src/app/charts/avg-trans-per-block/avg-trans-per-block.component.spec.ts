import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgTransPerBlockComponent } from './avg-trans-per-block.component';

describe('AvgTransPerBlockComponent', () => {
  let component: AvgTransPerBlockComponent;
  let fixture: ComponentFixture<AvgTransPerBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgTransPerBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgTransPerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
