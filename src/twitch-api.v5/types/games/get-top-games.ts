import { Game } from './../shared';

export interface GetTopGamesInput {
    limit?: number;
    offset?: number;
}

export interface GetTopGamesOutput {
    _total: number;
    top: Top[];
}

export interface Top {
    game: Game;
    viewers: number;
    channels: number;
}



