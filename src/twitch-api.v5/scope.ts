//https://dev.twitch.tv/docs/v5/guides/authentication/#scopes
export enum Scope {
    ChannelCheckSubscription = 'channel_check_subscription',
    ChannelCommercial = 'channel_commercial',
    ChannelEditor = 'channel_editor',
    ChannelFeedEdit = 'channel_feed_edit',
    ChannelFeedRead = 'channel_feed_read',
    ChannelRead = 'channel_read',
    ChannelStream = 'channel_stream',
    ChannelSubscriptions = 'channel_subscriptions',
    ChatLogin = 'chat_login',
    CollectionsEdit = 'collections_edit',
    CommunitiesEdit = 'communities_edit',
    CommunitiesModerate = 'communities_moderate',
    Openid = 'openid',
    UserBlocksEdit = 'user_blocks_edit',
    UserBlocksRead = 'user_blocks_read',
    UserFollowsEdit = 'user_follows_edit',
    UserRead = 'user_read',
    UserSubscriptions = 'user_subscriptions',
    ViewingActivityRead = 'viewing_activity_read'
}