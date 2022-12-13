import { AppMetaData } from "./app-metadata";
import { UserMetaData } from "./user-metadata";

export interface GoTrueNodeUser<T = AppMetaData, U = UserMetaData> {
    app_metadata: T;
    aud: string;
    audience: string;
    confirmed_at: string;
    created_at: string;
    email: string;
    id: string;
    role: string;
    sub: string;
    token: Token;
    updated_at: string;
    url: string;
    user_metadata: U;
}

export interface Token {
    access_token: string;
    expires_at: number;
    expires_in: number;
    refresh_token: string;
    token_type: 'bearer';
}