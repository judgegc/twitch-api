import { User } from './../shared';

export interface CheckChannelSubscriptionByUserOutput {
    _id: string;
    created_at: Date;
    sub_plan: string;
    sub_plan_name: string;
    user: User;
}