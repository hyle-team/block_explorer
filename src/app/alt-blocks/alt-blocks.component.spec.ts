import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { AltBlocksComponent } from './alt-blocks.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpService, MobileNavState } from './../services/http.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('AltBlocksComponent', () => {
    let component: AltBlocksComponent
    let fixture: ComponentFixture<AltBlocksComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AltBlocksComponent],
            providers: [HttpService, MobileNavState],
            imports: [HttpClientTestingModule, RouterTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(AltBlocksComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should be created', () => {
        expect(component).toBeTruthy()
    })
})
