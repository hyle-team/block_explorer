import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AliasesComponent } from './aliases.component';
import { HttpService } from './../http.service';
import { DialogComponent } from './../dialog/dialog.component';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AliasesComponent', () => {
  let component: AliasesComponent;
  let fixture: ComponentFixture<AliasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AliasesComponent,
        DialogComponent
      ],
      providers: [
        HttpService,
      ],
      imports: [
        HttpModule,
        RouterTestingModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
