import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NgxsModule } from '@ngxs/store'
import { TransactionPoolState } from 'app/states/transaction-pool-state'
import { environment } from 'environments/environment'
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io'
import { HttpService } from './http.service'

import { WebSocketService } from './web-socket.service'
const config: SocketIoConfig = { url: environment.backend, options: {transports: ['websocket', 'polling']} }

describe('WebSocketService', () => {
    let service: WebSocketService

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, 
                RouterTestingModule,
                NgxsModule.forRoot([TransactionPoolState], {developmentMode: true}),
                SocketIoModule.forRoot(config)
            ],
            providers: [
                HttpService
            ]
        })
        service = TestBed.inject(WebSocketService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})
