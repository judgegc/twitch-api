import { Channel, Preview, Stream } from './../shared';

export interface Featured {
    text: string;
    title: string;
    sponsored: boolean;
    priority: number;
    scheduled: boolean;
    image: string;
    stream: Stream;
}

export interface GetFeaturedStreamsOutput {
    featured: Featured[];
}