import { IUser } from "../types/user.ts";

export interface AuthState {
    user: IUser | null;
    token: string | null;
    username: string;
    image: string;
    isAuthenticated: boolean;
}

export interface AuthResponse {
    token: string;
    user: IUser;
    id: number;
}

