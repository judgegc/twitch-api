import 'reflect-metadata';
import { Observable } from 'rxjs';

import { BaseApi, EntryPoint, RequestMethod, QueryString, DataString, ParametersPackMethod } from './../base-api';
import { Requestor } from './../base-api';

import { GetLiveStreamsInput, GetLiveStreamsOutput } from './types';

import { GetChannelOutput } from './types';
import { GetChannelByIdOutput } from './types';
import { UpdateChannelInput, UpdateChannelOutput } from './types';
import { GetChannelEditorsOutput } from './types';
import { GetChannelFollowersInput, GetChannelFollowersOutput } from './types';
import { GetChannelTeamsOutput } from './types';
import { GetChannelSubscribersInput, GetChannelSubscribersOutput } from './types';
import { CheckChannelSubscriptionByUserOutput } from './types';
import { GetChannelVideosInput, GetChannelVideosOutput } from './types';
import { StartChannelCommercialOutput } from './types';
import { ResetChannelStreamKeyOutput } from './types';
import { GetChannelCommunitiesOutput } from './types';

import { GetMultipleFeedPostsInput, GetMultipleFeedPostsOutput } from './types';
import { GetFeedPostOutput } from './types';
import { CreateFeedPostOutput } from './types';
import { DeleteFeedPostOutput } from './types';
import { CreateReactionToFeedPostOutput } from './types';
import { DeleteReactionToFeedPostOutput } from './types';
import { GetFeedCommentsInput, GetFeedCommentsOutput } from './types';
import { CreateFeedCommentOutput } from './types';
import { DeleteFeedCommentOutput } from './types';
import { CreateReactionToFeedCommentOutput } from './types';
import { DeleteReactionToFeedCommentOutput } from './types';

import { GetStreamByUserOutput } from './types';
import { GetStreamsSummaryOutput } from './types';
import { GetFeaturedStreamsOutput } from './types';
import { GetFollowedStreamsInput, GetFollowedStreamsOutput } from './types';
import { SearchChannelsInput, SearchChannelsOutput } from './types';
import { SearchGamesOutput } from './types';
import { SearchStreamsInput, SearchStreamsOutput } from './types';
import { GetAllTeamsInput, GetAllTeamsOutput } from './types';
import { GetTeamOutput } from './types';
import { GetIngestServerListOutput } from './types';
import { GetTopGamesInput, GetTopGamesOutput } from './types';

import { Scope } from './scope';

export interface Credentials {
    clientId?: string;
    oAuth?: string;
}

export class TwitchApi<Requestor> extends BaseApi {

    protected get entry() {
        return 'https://api.twitch.tv/kraken';
    }

    protected get headers() {
        return {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Content-Type': 'application/json',
            'Client-ID': this.cred.clientId,
            'Authorization': this.cred.oAuth
        };
    }

    protected pathBuilder(path: string, queryParams: { [param: string]: string | number | any[] }): string {
        if (Object.keys(queryParams).length > 0) {
            return path + '?' + encodeURI(Object.keys(queryParams)
                .map(x => x + '=' + queryParams[x])
                .join('&'));
        } else {
            return path;
        }
    }

    protected dataBuilder(data: Object): any {
        return data;
    }

    private scopes: Scope[];

    get clientId(): string { return this.cred.clientId; }

    set clientId(cid: string) { this.cred.clientId = cid; }

    get oAuth(): string { return this.cred.oAuth; }

    set oAuth(token: string) { this.cred.oAuth = token; }

    constructor(private cred: Credentials, requestor: Requestor) {
        super(requestor);
    }

    protected process(args): Observable<any> {
        //Тут будем чекать скоупчики
        return super.process(args);
    }

    @EntryPoint(RequestMethod.Get, '/feed/{channelId}/posts')
    getMultipleFeedPosts(
        @QueryString('channelId') channelId: number,
        @QueryString('') options: GetMultipleFeedPostsInput
        ): Observable<GetMultipleFeedPostsOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/feed/{channelId}/posts/{postId}')
    getFeedPost(
        @QueryString('channelId') channelId: number,
        @QueryString('postId') postId: string,
    ): Observable<GetFeedPostOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Post, '/feed/{channelId}/posts')
    createFeedPost(
        @QueryString('channelId') channelId: number,
        @DataString('content') content: string,
        @QueryString('share') share: boolean): Observable<CreateFeedPostOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Delete, '/feed/{channelId}/posts/{postId}')
    deleteFeedPost(
        @QueryString('channelId') channelId: number,
        @QueryString('postId') postId: string,
    ): Observable<DeleteFeedPostOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Post, '/feed/{channelId}/posts/{postId}/reactions')
    createReactionToFeedPost(
        @QueryString('channelId') channelId: number,
        @QueryString('postId') postId: string,
        @QueryString('emote_id') emoteId: number,
    ): Observable<CreateReactionToFeedPostOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Delete, '/feed/{channelId}/posts/{postId}/reactions')
    deleteReactionToFeedPost(
        @QueryString('channelId') channelId: number,
        @QueryString('postId') postId: string,
        @QueryString('emote_id') emoteId: number,
    ): Observable<DeleteReactionToFeedPostOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/feed/{channelId}/posts/{postId}/comments')
    getFeedComments(
        @QueryString('channelId') channelId: number,
        @QueryString('postId') postId: string,
        @QueryString('') options: GetFeedCommentsInput): Observable<GetFeedCommentsOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Post, '/feed/{channelId}/posts/{postId}/comments')
    createFeedComment(
        @QueryString('channelId') channelId: number,
        @QueryString('postId') postId: string,
        @DataString('content') content: string
        ): Observable<CreateFeedCommentOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Delete, '/feed/{channelId}/posts/{postId}/comments/{commentId}')
    deleteFeedComment(
        @QueryString('channelId') channelId: number,
        @QueryString('postId') postId: string,
        @QueryString('commentId') commentId: string,
    ): Observable<DeleteFeedCommentOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Post, '/feed/{channelId}/posts/{postId}/comments/{commentId}/reactions')
    createReactionToFeedComment(
        @QueryString('channelId') channelId: number,
        @QueryString('postId') postId: string,
        @QueryString('commentId') commentId: string,
        @QueryString('emote_id') emoteId: number,
    ) {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Delete, '/feed/{channelId}/posts/{postId}/comments/{commentId}/reactions')
    deleteReactionToFeedComment(
        @QueryString('channelId') channelId: number,
        @QueryString('postId') postId: string,
        @QueryString('commentId') commentId: string,
        @QueryString('emote_id') emoteId: number,
    ): Observable<DeleteReactionToFeedCommentOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/channel')
    getChannel(): Observable<GetChannelOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/streams/{channelId}')
    getStreamByUser(
        @QueryString('channelId') channelId: number,
        @QueryString('stream_type') streamType: string): Observable<GetStreamByUserOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/streams')
    getLiveStreams(
        @QueryString('') options: GetLiveStreamsInput): Observable<GetLiveStreamsOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/streams/summary')
    getStreamsSummary(
        @QueryString('game') game: string
        ): Observable<GetStreamsSummaryOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/streams/featured')
    getFeaturedStreams(
        @QueryString('limit') limit: number,
        @QueryString('offset') offset: number
        ): Observable<GetFeaturedStreamsOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/streams/followed')
    getFollowedStreams(
        @QueryString('') options: GetFollowedStreamsInput): Observable<GetFollowedStreamsOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/search/channels')
    searchChannels(
        @QueryString('query') query: string,
        @QueryString('') options: SearchChannelsInput): Observable<SearchChannelsOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/search/games')
    searchGames(
        @QueryString('query') query: string,
        @QueryString('live') live: boolean): Observable<SearchGamesOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/search/streams')
    searchStreams(
        @QueryString('query') query: string,
        @QueryString('') options: SearchStreamsInput): Observable<SearchStreamsOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/teams')
    getAllTeams(
        @QueryString('') options: GetAllTeamsInput): Observable<GetAllTeamsOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/teams/{teamName}')
    getTeam(
        @QueryString('teamName') teamName: string): Observable<GetTeamOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/ingests')
    getIngestServerList(): Observable<GetIngestServerListOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/games/top')
    getTopGames(
        @QueryString('') options: GetTopGamesInput): Observable<GetTopGamesOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/channels/{channelId}')
    getChannelById(
        @QueryString('channelId') channelId: number): Observable<GetChannelByIdOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Put, '/channels/{channelId}')
    updateChannel(
        @QueryString('channelId') channelId: number,
        @DataString('channel') editableParams: UpdateChannelInput): Observable<UpdateChannelOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/channels/{channelId}/editors')
    getChannelEditors(
        @QueryString('channelId') channelId: number
        ): Observable<GetChannelEditorsOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/channels/{channelId}/follows')
    getChannelFollowers(
        @QueryString('channelId') channelId: number | string,
        @QueryString('') options: GetChannelFollowersInput
        ): Observable<GetChannelFollowersOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/channels/{channelId}/teams')
    getChannelTeams(
        @QueryString('channelId') channelId: number
        ): Observable<GetChannelTeamsOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/channels/{channelId}/subscriptions')
    getChannelSubscribers(
        @QueryString('channelId') channelId: number,
        @QueryString('') options: GetChannelSubscribersInput
        ): Observable<GetChannelSubscribersOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/channels/{channelId}/subscriptions/{userId}')
    checkChannelSubsciptionByUser(
        @QueryString('channelId') channelId: number,
        @QueryString('userId') userId: number
        ): Observable<CheckChannelSubscriptionByUserOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/channels/{channelId}/videos')
    getChannelVideos(
        @QueryString('channelId') channelId: number,
        @QueryString('') options: GetChannelVideosInput
        ): Observable<GetChannelVideosOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Post, '/channels/{channelId}/commercial')
    startChannelCommercial(
        @QueryString('channelId') channelId: number,
        @DataString('length') length: number
        ): Observable<StartChannelCommercialOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Delete, '/channels/{channelId}/stream_key')
    resetChannelStreamKey(
        @QueryString('channelId') channelId: number
        ): Observable<ResetChannelStreamKeyOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Get, '/channels/{channelId}/communities')
    getChannelCommunities(
        @QueryString('channelId') channelId: number
        ): Observable<GetChannelCommunitiesOutput> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Put, '/channels/{channelId}/communities')
    setChannelCommunities(
        @QueryString('channelId') channelId: number,
        @DataString('community_ids') communityIds: string[]
        ): Observable<any> {
        return this.process(arguments);
    }

    @EntryPoint(RequestMethod.Delete, '/channels/{channelId}/community')
    deleteChannelFromCommunities(
        @QueryString('channelId') channelId: number
        ): Observable<any> {
        return this.process(arguments);
    }
}