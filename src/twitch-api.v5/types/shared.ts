export interface Box {
    large: string;
    medium: string;
    small: string;
    template: string;
}

export interface Logo {
    large: string;
    medium: string;
    small: string;
    template: string;
}

export interface Game {
    name: string;
    popularity: number;
    _id: string;
    giantbomb_id: number;
    box: Box;
    logo: Logo;
    localized_name: string;
    locale: string;
}

export interface Channel {
    mature?: boolean;
    status: string;
    broadcaster_language: string;
    display_name: string;
    game: string;
    language: string;
    _id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    partner: boolean;
    logo: string;
    video_banner: string;
    profile_banner: string;
    profile_banner_background_color: string;
    url: string;
    views: number;
    followers: number;
    broadcaster_type?: string;
    description?: string;
    email?: string;
}

export interface Preview {
    small: string;
    medium: string;
    large: string;
    template: string;
}

export interface Stream {
    _id: string;
    game: string;
    viewers: number;
    video_height: number;
    average_fps: number;
    delay: number;
    created_at: Date;
    is_playlist: boolean;
    preview: Preview;
    channel: Channel;
}

export interface User {
    display_name: string;
    _id: string;
    name: string;
    type: string;
    bio?: any;
    created_at: Date;
    updated_at: Date;
    logo?: any;
}

export interface Team {
    _id: string;
    name: string;
    info: string;
    display_name: string;
    created_at: Date;
    updated_at: Date;
    logo: string;
    banner: string;
    background: string;
}

export interface Emote {
    end: number;
    id: number;
    set: number;
    start: number;
}

export interface Permissions {
    can_delete: boolean;
}

export interface Reactions {
    [key: number]: { count: number, emote: string, user_ids: number[] };
}

export interface Comments {
    comments: Comment[];
    _cursor: string;
    _total: number;
}

export interface Post {
    id: string;
    body: string;
    comments?: Comments;
    created_at: Date;
    deleted: boolean;
    embeds: any[];
    emotes: any[];
    permissions: Permissions;
    reactions: Reactions;
    user: User;
    share_summary: ShareSummary;
    type: string;
    tracking?: Tracking;
    reasons?: Reason[];
}

export interface Reason {
    type: string;
    user: User;
    created_at: Date;
}

export interface Tracking {
    card_impression_id: string;
}

export interface Comment {
    body: string;
    created_at: Date;
    deleted: boolean;
    emotes: Emote[];
    id: string;
    permissions: Permissions;
    reactions: Reactions;
    user: User;
}

export interface Endorse {
    count: number;
    emote: string;
    user_ids: number[];
}

export interface ShareSummary {
    users?: any;
    share_count: number;
}