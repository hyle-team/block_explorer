import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { HttpService, MobileNavState } from './../services/http.service'
import { DialogComponent } from './../dialog/dialog.component'
import { RouterTestingModule } from '@angular/router/testing'
import { TransactionComponent } from './transaction.component'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { PipesModule } from 'app/pipes/pipes.module'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('TransactionComponent', () => {
    let component: TransactionComponent
    let fixture: ComponentFixture<TransactionComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [TransactionComponent, DialogComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [RouterTestingModule,
        PipesModule],
    providers: [HttpService, MobileNavState, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(TransactionComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    xit('should be created', () => {
        expect(component).toBeTruthy()
    })
})
