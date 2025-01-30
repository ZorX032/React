import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types/auth";

const initialState: AuthState = { user: null, token: null, isAuthenticated: true, image:"image", username:'user' };

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

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//
// export interface AuthState {
//     user: { id: number; username: string } | null;
//     loading: boolean;
//     error: string | null;
// }
//
// const initialState: AuthState = {
//     user: null,
//     loading: false,
//     error: null,
// };
//
// export const loginUser = createAsyncThunk("auth/loginUser", async (credentials: { username: string; password: string }) => {
//     const response = await fetch("https://dummyjson.com/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(credentials),
//     });
//     const data = await response.json();
//     if (!response.ok) throw new Error(data.message || "Failed to login");
//     return data;
// });
//
// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         logout: (state) => {
//             state.user = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(loginUser.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(loginUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.user = action.payload;
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message || "Login failed";
//             });
//     },
// });
//
// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
