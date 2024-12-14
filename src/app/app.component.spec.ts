import { TestBed, waitForAsync } from '@angular/core/testing'

import { HttpService } from './services/http.service'
import { AppComponent } from './app.component'
import { provideHttpClientTesting } from '@angular/common/http/testing'
// import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner'
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner's
import { RouterTestingModule } from '@angular/router/testing'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [MatProgressSpinnerModule,
        RouterTestingModule],
    providers: [HttpService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents()
    }))

    it('should create the app', waitForAsync(() => {
        // const fixture = TestBed.createComponent(AppComponent);
        // const app = fixture.debugElement.componentInstance;
        // expect(app).toBeTruthy();
    }))
})
