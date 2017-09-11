import { Channel } from './../shared';

export interface GetTeamOutput {
    _id: string;
    name: string;
    info: string;
    display_name: string;
    created_at: Date;
    updated_at: Date;
    logo: string;
    banner: string;
    background?: any;
    users: Channel[];
}


