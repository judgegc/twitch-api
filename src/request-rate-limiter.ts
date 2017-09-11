import { Observable, Subject } from 'rxjs';

export class RequestRateLimiter {
    private lastCall = new Date(null).getTime()
    constructor(private rate: number) {
    }

    invoke(request: Observable<any>) {
        return Observable
            .of(null)
            .delay(Math.max(0, this.rate - (Date.now() - this.lastCall)))
            .do(() => this.lastCall = Date.now())
            .switchMapTo(request)
    }
}