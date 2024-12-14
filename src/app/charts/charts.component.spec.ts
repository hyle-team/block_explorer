import { provideHttpClientTesting } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NgxsModule } from '@ngxs/store'
import { ChartsState } from 'app/states/charts-state'
import { HttpService, MobileNavState } from '../services/http.service'

import { ChartsComponent } from './charts.component'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ChartsComponent', () => {
    let component: ChartsComponent
    let fixture: ComponentFixture<ChartsComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [ChartsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [RouterTestingModule,
        NgxsModule.forRoot([ChartsState], { developmentMode: true })],
    providers: [HttpService, MobileNavState, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(ChartsComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
