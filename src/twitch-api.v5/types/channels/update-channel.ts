import { Channel } from './../shared';

export interface UpdateChannelInput {
    status?: string;
    game?: string;
    delay?: number;
    channel_feed_enabled?: boolean;

}

export type UpdateChannelOutput = Channel;
