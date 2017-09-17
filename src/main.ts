import 'rxjs/operator/repeat';
import { Observable } from 'rxjs/Observable';
import { Channel } from './twitch-api.v5/types/shared';

import { TwitchApi } from './twitch-api.v5/twitch-api';
import { TwitchApi as TwitchApiUnofficial } from './twitch-api.onsite/twitch-api';
import { TwitchApi as NewTwitchApi } from './twitch-api/twitch-api';

import { RequestRateLimiter } from './request-rate-limiter';

import { AjaxRequestor } from './ajax-requestor';

let cred = {
    clientId: 'clientId',
    oAuth: 'oAuth'
};

let api = new TwitchApi(cred, AjaxRequestor);
let unApi = new TwitchApiUnofficial(cred, AjaxRequestor);
let newApi = new NewTwitchApi(cred, AjaxRequestor);

let limiter = new RequestRateLimiter(2000);

api.getLiveStreams({ game: 'Dota 2' })
    .subscribe(x => console.log(x));