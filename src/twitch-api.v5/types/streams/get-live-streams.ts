import { Channel, Preview } from './../shared';

export interface GetLiveStreamsInput {
    channel?: number[], //channel id's
    game?: string,
    language?: string,
    stream_type?: string,
    limit?: number,
    offset?: number
}

export interface GetLiveStreamsOutput {
    _total: number;
    streams: {
        _id: any;
        game: string;
        broadcast_platform: string;
        community_id: string;
        community_ids: string[];
        viewers: number;
        video_height: number;
        average_fps: number;
        delay: number;
        created_at: Date;
        is_playlist: boolean;
        stream_type: string;
        preview: Preview;
        channel: Channel;
    }[];
}



