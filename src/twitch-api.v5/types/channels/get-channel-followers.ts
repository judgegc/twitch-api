import { User } from './../shared';

export interface GetChannelFollowersInput {
    limit?: number;
    offset?: number;
    cursor?: string;
    direction?: string;
}

export interface GetChannelFollowersOutput {
    _total: number;
    _cursor: string;
    follows: Follow[];
}

export interface Follow {
    created_at: Date;
    notifications: boolean;
    user: User;
}
