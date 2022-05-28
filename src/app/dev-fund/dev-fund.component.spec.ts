import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DevFundComponent } from './dev-fund.component'

describe('DevFundComponent', () => {
    let component: DevFundComponent
    let fixture: ComponentFixture<DevFundComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DevFundComponent]
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
