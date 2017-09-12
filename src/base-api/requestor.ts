import { Observable } from 'rxjs';

import { RequestMethod } from './request-method';

export interface Requestor {
    request(
        method: RequestMethod,
        url: string,
        dataString: { [param: string]: string | number },
        headers: { [param: string]: string }): Observable<any>;
}