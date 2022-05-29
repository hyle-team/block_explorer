import { TestBed, waitForAsync } from '@angular/core/testing'

import { HttpService } from './services/http.service'
import { AppComponent } from './app.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { RouterTestingModule } from '@angular/router/testing'

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [HttpService],
            imports: [
                HttpClientTestingModule,
                MatProgressSpinnerModule,
                RouterTestingModule
            ]
        }).compileComponents()
    }))

    it('should create the app', waitForAsync(() => {
        // const fixture = TestBed.createComponent(AppComponent);
        // const app = fixture.debugElement.componentInstance;
        // expect(app).toBeTruthy();
    }))
})
