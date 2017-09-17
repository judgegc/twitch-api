import 'reflect-metadata';
import { Observable } from 'rxjs';

import { BaseApi, EntryPoint, RequestMethod, QueryString, DataString, Requestor, ParametersPackMethod, isArray } from './../base-api';

export interface Credentials {
    clientId?: string;
    oAuth?: string;
}

export class TwitchApi<Requestor> extends BaseApi {

    protected get entry() {
        return 'https://api.twitch.tv/helix';
    }

    protected get headers() {
        return {
            'Content-Type': 'application/json',
            'Client-ID': this.cred.clientId,
            'Authorization': this.cred.oAuth
        };
    }

    constructor(private cred: Credentials, requestor: Requestor) {
        super(requestor);
    }

    protected pathBuilder(path: string, queryParams: { [param: string]: string | number | any[] }): string {
        if (Object.keys(queryParams).length > 0) {
            return path + '?' + encodeURI(Object.keys(queryParams)
                .map(key => {
                    const val = queryParams[key];
                    if (isArray(val)) {
                        return (val as any[]).map(x => key + '=' + x).join('&');
                    } else {
                        return key + '=' + val;
                    }
                })
                .join('&'));
        } else {
            return path;
        }
    }

    protected dataBuilder(data: Object): any {
        return data;
    }

    @EntryPoint(RequestMethod.Get, '/users')
    getUsers(
        @QueryString('id') id: string[] | number[] | string | number,
        @QueryString('login') login: string[],
    ): Observable<any> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/streams')
    getStreams(
        @QueryString('') options: { user_id?: number[], type?: string, first?: number, user_login?: string[] },
    ): Observable<any> {
        return this.process(arguments);
    }
}