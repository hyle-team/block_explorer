import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { MainInfoComponent } from './main-info.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpService } from './../services/http.service'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { PipesModule } from '../pipes/pipes.module'
import { NgxsModule, Store } from '@ngxs/store'
import { InfoState } from 'app/states/info-state'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('MainInfoComponent', () => {
    let component: MainInfoComponent
    let fixture: ComponentFixture<MainInfoComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [MainInfoComponent],
    imports: [RouterTestingModule, PipesModule,
        NgxsModule.forRoot([InfoState], { developmentMode: true })],
    providers: [HttpService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(MainInfoComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
