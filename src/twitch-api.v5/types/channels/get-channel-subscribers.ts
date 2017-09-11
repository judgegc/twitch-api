import { User } from './../shared';

export class GetChannelSubscribersInput {
    limit?: number;
    offset?: number;
    direction?: string;
}

export interface GetChannelSubscribersOutput {
    _total: number;
    subscriptions: Subscription[];
}

export interface Subscription {
    _id: string;
    created_at: Date;
    sub_plan: string;
    sub_plan_name: string;
    user: User;
}
