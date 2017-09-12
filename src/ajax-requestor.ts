import { Observable } from 'rxjs';

import { Requestor, RequestMethod } from './base-api';

export class AjaxRequestor implements Requestor {
    request(
        method: RequestMethod,
        url: string,
        dataString: { [param: string]: string | number },
        headers: { [param: string]: string }): Observable<any> {
        return Observable
            .ajax({ method: method, url: url, body: dataString, headers: headers, responseType: 'json' })
            .map(r => r.response);
    }
}