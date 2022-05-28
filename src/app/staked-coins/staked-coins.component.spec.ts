import { ComponentFixture, TestBed } from '@angular/core/testing'

import { StakedCoinsComponent } from './staked-coins.component'

describe('StakedCoinsComponent', () => {
    let component: StakedCoinsComponent
    let fixture: ComponentFixture<StakedCoinsComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StakedCoinsComponent]
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(StakedCoinsComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
