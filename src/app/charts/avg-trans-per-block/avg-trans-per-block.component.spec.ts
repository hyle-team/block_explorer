import { provideHttpClientTesting } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NgxsModule } from '@ngxs/store'
import { ChartsState } from 'app/states/charts-state'
import { HttpService, MobileNavState } from '../../services/http.service'

import { AvgTransPerBlockComponent } from './avg-trans-per-block.component'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AvgTransPerBlockComponent', () => {
    let component: AvgTransPerBlockComponent
    let fixture: ComponentFixture<AvgTransPerBlockComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [AvgTransPerBlockComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [RouterTestingModule,
        NgxsModule.forRoot([ChartsState], { developmentMode: true })],
    providers: [HttpService, MobileNavState, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(AvgTransPerBlockComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
