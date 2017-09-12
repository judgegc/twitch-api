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

    constructor(private cred: Credentials, private requestor: Requestor) {
        super(requestor);
    }

    @EntryPoint(RequestMethod.Get, '/channels/{channel}/access_token')
    getFeedPost(
        @QueryString('channel') channel: string,
    ): Observable<any> {
        return this.process(arguments);
    }
}