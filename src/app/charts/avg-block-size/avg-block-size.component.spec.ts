import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpService, MobileNavState } from '../../services/http.service'
import { NgxsModule } from '@ngxs/store'
import { ChartsState } from 'app/states/charts-state'

import { AvgBlockSizeComponent } from './avg-block-size.component'

describe('AvgBlockSizeComponent', () => {
    let component: AvgBlockSizeComponent
    let fixture: ComponentFixture<AvgBlockSizeComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AvgBlockSizeComponent],
            providers: [HttpService, MobileNavState],
            imports: [HttpClientTestingModule, 
                RouterTestingModule,
                NgxsModule.forRoot([ChartsState], {developmentMode: true})
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
