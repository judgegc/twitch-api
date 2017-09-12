import { Observable } from 'rxjs';

import { Requestor, RequestMethod } from './base-api';

export class HttpRequestor implements Requestor {
    request(
        method: RequestMethod,
        url: string,
        dataString: { [param: string]: string | number },
        headers: { [param: string]: string }): Observable<any> {
        return undefined;
    }
}