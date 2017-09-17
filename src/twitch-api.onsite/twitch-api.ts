import 'reflect-metadata';
import { Observable } from 'rxjs';

import { BaseApi, EntryPoint, RequestMethod, QueryString, DataString, Requestor } from './../base-api';

export interface Credentials {
    clientId?: string;
    oAuth?: string;
}

export class TwitchApi<Requestor> extends BaseApi {

    protected get entry() {
        return 'https://api.twitch.tv/api';
    }

    protected get headers() {
        return {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Content-Type': 'application/json',
            'Client-ID': this.cred.clientId,
            'Authorization': this.cred.oAuth
        };
    }

    constructor(private cred: Credentials, requestor: Requestor) {
        super(requestor);
    }

    protected pathBuilder(path: string, queryParams: { [param: string]: string | number | any[] }): string {
        if (queryParams.length > 0) {
            return path + '?' + encodeURI(Object.keys(queryParams)
                .map(x => x + '=' + queryParams[x])
                .join('&'));
        } else {
            return path;
        }
    }

    protected dataBuilder(data: Object): any {
        return data;
    }

    @EntryPoint(RequestMethod.Get, '/channels/{channel}/access_token')
    getFeedPost(
        @QueryString('channel') channel: string,
    ): Observable<any> {
        return this.process(arguments);
    }
}