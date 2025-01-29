import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types/auth";

const initialState: AuthState = { user: null, token: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<AuthState>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
