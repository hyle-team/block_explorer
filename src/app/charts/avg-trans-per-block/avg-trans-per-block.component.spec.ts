import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NgxsModule } from '@ngxs/store'
import { ChartsState } from 'app/states/charts-state'
import { HttpService, MobileNavState } from '../../services/http.service'

import { AvgTransPerBlockComponent } from './avg-trans-per-block.component'

describe('AvgTransPerBlockComponent', () => {
    let component: AvgTransPerBlockComponent
    let fixture: ComponentFixture<AvgTransPerBlockComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AvgTransPerBlockComponent],
            providers: [HttpService, MobileNavState],
            imports: [HttpClientTestingModule, 
                RouterTestingModule,
                NgxsModule.forRoot([ChartsState], {developmentMode: true})
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
