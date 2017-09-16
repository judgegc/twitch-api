import { Channel } from './../shared';

export interface GetChannelVideosInput {
    limit?: number;
    offset?: number;
    broadcast_type?: string;
    language?: string;
    sort?: string;
}

export interface GetChannelVideosOutput {
    _total: number;
    videos: Video[];
}

export interface Preview {
    small: string;
    medium: string;
    large: string;
    template: string;
}

export interface Small {
    type: string;
    url: string;
}

export interface Medium {
    type: string;
    url: string;
}

export interface Large {
    type: string;
    url: string;
}

export interface Template {
    type: string;
    url: string;
}

export interface Thumbnails {
    small: Small[];
    medium: Medium[];
    large: Large[];
    template: Template[];
}

export interface Fps {
    '160p30': number;
    '360p30': number;
    '480p30': number;
    '720p30': number;
    '720p60': number;
    chunked: number;
}

export interface Resolutions {
    '160p30': string;
    '360p30': string;
    '480p30': string;
    '720p30': string;
    '720p60': string;
    chunked: string;
}

export interface Video {
    title: string;
    description?: any;
    description_html?: any;
    broadcast_id: any;
    broadcast_type: string;
    status: string;
    tag_list: string;
    views: number;
    url: string;
    language: string;
    created_at: Date;
    viewable: string;
    viewable_at?: any;
    published_at: Date;
    _id: string;
    recorded_at: Date;
    game: string;
    length: number;
    preview: Preview;
    animated_preview_url: string;
    thumbnails: Thumbnails;
    fps: Fps;
    resolutions: Resolutions;
    channel: Channel;
}