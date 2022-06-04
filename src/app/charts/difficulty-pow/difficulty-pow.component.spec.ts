import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NgxsModule } from '@ngxs/store'
import { ChartsState } from 'app/states/charts-state'
import { HttpService, MobileNavState } from '../../services/http.service'

import { DifficultyPowComponent } from './difficulty-pow.component'

describe('DifficultyPowComponent', () => {
    let component: DifficultyPowComponent
    let fixture: ComponentFixture<DifficultyPowComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DifficultyPowComponent],
            providers: [HttpService, MobileNavState],
            imports: [HttpClientTestingModule, 
                RouterTestingModule,
                NgxsModule.forRoot([ChartsState], {developmentMode: true})
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(DifficultyPowComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
