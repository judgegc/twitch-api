import { Stream } from './../shared';

export interface GetFollowedStreamsInput {
    stream_type?: string;
    limit?: number;
    offset?: number;
}

export interface GetFollowedStreamsOutput {
    _total: number;
    streams: Stream[];
}