import { User } from './../shared';

export interface CreateReactionToFeedCommentOutput {
    created_at: Date;
    emote_id: string;
    id: string;
    user?: User;
}