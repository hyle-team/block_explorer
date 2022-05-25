import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { AltBlocksDetailsComponent } from './alt-blocks-details.component'
import { MainInfoComponent } from './../main-info/main-info.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpService, MobileNavState } from './../services/http.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { PipesModule } from '../pipes/pipes.module'

describe('AltBlocksDetailsComponent', () => {
    let component: AltBlocksDetailsComponent
    let fixture: ComponentFixture<AltBlocksDetailsComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AltBlocksDetailsComponent, MainInfoComponent],
            providers: [MobileNavState, HttpService],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                PipesModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(AltBlocksDetailsComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    xit('should be created', () => {
        expect(component).toBeTruthy()
    })
})
