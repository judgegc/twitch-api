import { Channel, Preview, Stream } from './../shared';

export interface SearchStreamsInput {
    limit?: number;
    offset?: number;
    hls?: boolean;
}

export interface SearchStreamsOutput {
    _total: number;
    streams: Stream[];
}


