import { provideHttpClientTesting } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpService } from '../services/http.service'

import { SearchComponent } from './search.component'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SearchComponent', () => {
    let component: SearchComponent
    let fixture: ComponentFixture<SearchComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [SearchComponent],
    imports: [RouterTestingModule.withRoutes([])],
    providers: [HttpService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
