import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { AliasesComponent } from './aliases.component'
import { HttpService, MobileNavState } from './../services/http.service'
import { DialogComponent } from './../dialog/dialog.component'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AliasesComponent', () => {
    let component: AliasesComponent
    let fixture: ComponentFixture<AliasesComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [AliasesComponent, DialogComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [RouterTestingModule],
    providers: [HttpService, MobileNavState, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(AliasesComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should be created', () => {
        expect(component).toBeTruthy()
    })
})
