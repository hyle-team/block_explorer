import { provideHttpClientTesting } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NgxsModule } from '@ngxs/store'
import { ChartsState } from 'app/states/charts-state'
import { HttpService, MobileNavState } from '../../services/http.service'

import { ConfirmTransPerDayComponent } from './confirm-trans-per-day.component'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ConfirmTransPerDayComponent', () => {
    let component: ConfirmTransPerDayComponent
    let fixture: ComponentFixture<ConfirmTransPerDayComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [ConfirmTransPerDayComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [RouterTestingModule,
        NgxsModule.forRoot([ChartsState], { developmentMode: true })],
    providers: [HttpService, MobileNavState, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmTransPerDayComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
