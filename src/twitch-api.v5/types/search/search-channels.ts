import { Channel, Preview } from './../shared';

export class SearchChannelsInput {
    limit?: number;
    offset?: number;
}

export interface SearchChannelsOutput {
    _total: number;
    channels: Channel[];
}


