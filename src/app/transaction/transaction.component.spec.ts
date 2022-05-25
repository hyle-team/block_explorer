import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { HttpService, MobileNavState } from './../services/http.service'
import { DialogComponent } from './../dialog/dialog.component'
import { RouterTestingModule } from '@angular/router/testing'
import { TransactionComponent } from './transaction.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { PipesModule } from 'app/pipes/pipes.module'

describe('TransactionComponent', () => {
    let component: TransactionComponent
    let fixture: ComponentFixture<TransactionComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TransactionComponent, DialogComponent],
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
        fixture = TestBed.createComponent(TransactionComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    xit('should be created', () => {
        expect(component).toBeTruthy()
    })
})
