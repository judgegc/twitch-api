import { Post } from './../shared';

export interface GetMultipleFeedPostsInput {
    injects?: any[];
    limit?: number;
    cursor?: string;
    comments?: number;
}

export interface GetMultipleFeedPostsOutput {
    _cursor: string;
    _topic: string;
    _disabled: boolean;
    posts: Post[];
}