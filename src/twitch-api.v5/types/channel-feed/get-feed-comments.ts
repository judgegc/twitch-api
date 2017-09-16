import { Comment } from './../shared';

export interface GetFeedCommentsInput {
    limit?: number;
    cursor?: string;
}

export interface GetFeedCommentsOutput {
    comments: Comment[];
}