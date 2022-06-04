import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NgxsModule } from '@ngxs/store'
import { PipesModule } from 'app/pipes/pipes.module'
import { HttpService } from 'app/services/http.service'
import { VisibilityState } from 'app/states/visibility-state'

import { DevFundComponent } from './dev-fund.component'

describe('DevFundComponent', () => {
    let component: DevFundComponent
    let fixture: ComponentFixture<DevFundComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DevFundComponent],
            imports: [PipesModule,
                HttpClientTestingModule,
                RouterTestingModule,
                NgxsModule.forRoot([VisibilityState], {developmentMode: true})
            ],
            providers: [
                HttpService
            ]
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(DevFundComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
