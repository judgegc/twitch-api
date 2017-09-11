import { Team } from './../shared';

export interface GetAllTeamsInput {
    limit?: number;
    offset?: number;
}

export interface GetAllTeamsOutput {
    teams: Team[];
}

