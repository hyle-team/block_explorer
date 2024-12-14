import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { BlockDetailsComponent } from './block-details.component'
import { HttpService, MobileNavState } from './../services/http.service'
import { RouterTestingModule } from '@angular/router/testing'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { PipesModule } from '../pipes/pipes.module'
import { NgxsModule } from '@ngxs/store'
import { InfoState } from 'app/states/info-state'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('BlockDetailsComponent', () => {
    let component: BlockDetailsComponent
    let fixture: ComponentFixture<BlockDetailsComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [BlockDetailsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [RouterTestingModule,
        PipesModule,
        NgxsModule.forRoot([InfoState], { developmentMode: true })],
    providers: [HttpService, MobileNavState, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
