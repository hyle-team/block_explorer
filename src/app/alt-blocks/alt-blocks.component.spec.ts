import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { AltBlocksComponent } from './alt-blocks.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpService, MobileNavState } from './../services/http.service'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AltBlocksComponent', () => {
    let component: AltBlocksComponent
    let fixture: ComponentFixture<AltBlocksComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [AltBlocksComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [RouterTestingModule],
    providers: [HttpService, MobileNavState, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
