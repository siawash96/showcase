import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
} from '@nestjs/websockets'
import { from, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@WebSocketGateway(9998)
export default class Gateway {
    @WebSocketServer()
    server

    @SubscribeMessage('events')
    onEvent(client: SocketIO.Client, data): Observable<WsResponse<number>> {
        // console.log(client.id)
        return from([1, 2, 3]).pipe(
            map(item => ({ event: 'events', data: item })),
        )
    }
}