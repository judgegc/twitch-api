export interface Authorization {
    scopes: string[];
    created_at: Date;
    updated_at: Date;
}

export interface Token {
    valid: boolean;
    authorization: Authorization;
    user_name: string;
    user_id: string;
    client_id: string;
}

export interface AuthToken {
    token: Token;
}