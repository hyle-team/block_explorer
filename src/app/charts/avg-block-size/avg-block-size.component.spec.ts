import { provideHttpClientTesting } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpService, MobileNavState } from '../../services/http.service'
import { NgxsModule } from '@ngxs/store'
import { ChartsState } from 'app/states/charts-state'

import { AvgBlockSizeComponent } from './avg-block-size.component'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AvgBlockSizeComponent', () => {
    let component: AvgBlockSizeComponent
    let fixture: ComponentFixture<AvgBlockSizeComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [AvgBlockSizeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [RouterTestingModule,
        NgxsModule.forRoot([ChartsState], { developmentMode: true })],
    providers: [HttpService, MobileNavState, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(AvgBlockSizeComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
