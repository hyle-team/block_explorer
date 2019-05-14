import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyPowComponent } from './difficulty-pow.component';

describe('DifficultyPowComponent', () => {
  let component: DifficultyPowComponent;
  let fixture: ComponentFixture<DifficultyPowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultyPowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultyPowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
