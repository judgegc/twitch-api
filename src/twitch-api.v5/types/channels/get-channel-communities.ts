export interface GetChannelCommunitiesOutput {
    communities: Community[];
}
export interface Community {
    _id: string;
    owner_id: string;
    name: string;
    display_name: string;
    summary: string;
    description: string;
    description_html: string;
    rules: string;
    rules_html: string;
    language: string;
    avatar_image_url: string;
    cover_image_url: string;
}
