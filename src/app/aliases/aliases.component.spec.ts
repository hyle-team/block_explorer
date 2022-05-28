import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { AliasesComponent } from './aliases.component'
import { HttpService, MobileNavState } from './../services/http.service'
import { DialogComponent } from './../dialog/dialog.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('AliasesComponent', () => {
    let component: AliasesComponent
    let fixture: ComponentFixture<AliasesComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AliasesComponent, DialogComponent],
            providers: [HttpService, MobileNavState],
            imports: [HttpClientTestingModule, RouterTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(AliasesComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should be created', () => {
        expect(component).toBeTruthy()
    })
})
