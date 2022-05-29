import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NgxsModule } from '@ngxs/store'
import { ChartsState } from 'app/states/charts-state'
import { HttpService, MobileNavState } from '../../services/http.service'

import { ConfirmTransPerDayComponent } from './confirm-trans-per-day.component'

describe('ConfirmTransPerDayComponent', () => {
    let component: ConfirmTransPerDayComponent
    let fixture: ComponentFixture<ConfirmTransPerDayComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ConfirmTransPerDayComponent],
            providers: [HttpService, MobileNavState],
            imports: [HttpClientTestingModule, 
                RouterTestingModule,
                NgxsModule.forRoot([ChartsState], {developmentMode: true})
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
