import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { BlockDetailsComponent } from './block-details.component'
import { HttpService, MobileNavState } from './../services/http.service'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { PipesModule } from '../pipes/pipes.module'

describe('BlockDetailsComponent', () => {
    let component: BlockDetailsComponent
    let fixture: ComponentFixture<BlockDetailsComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BlockDetailsComponent],
            providers: [HttpService, MobileNavState],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                PipesModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockDetailsComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should be created', () => {
        expect(component).toBeTruthy()
    })
})
