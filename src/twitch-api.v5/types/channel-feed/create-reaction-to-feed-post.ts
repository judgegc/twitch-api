import { User } from './../shared';

export interface CreateReactionToFeedPostOutput {
    created_at: Date;
    emote_id: string;
    id: string;
    user?: User;
}