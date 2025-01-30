import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../types/user";
import { getUsers, getUserById } from "../api/users";

interface UsersState {
    users: IUser[];
    selectedUser: IUser | null;
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    selectedUser: null,
    loading: false,
    error: null,
};

// Асинхронное получение всех пользователей
export const fetchUsers = createAsyncThunk("users/fetchUsers", async (page: number) => {
    const limit = 10;
    const skip = (page - 1) * limit;
    return await getUsers(limit, skip);
});


// Асинхронное получение одного пользователя по ID
export const fetchUserById = createAsyncThunk("users/fetchUserById",
    async (id:number) => {
    return await getUserById(id);
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        clearSelectedUser: (state) => {
            state.selectedUser = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error loading users";
            })
            .addCase(fetchUserById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedUser = action.payload;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error loading user";
            });
    },
});

export const { clearSelectedUser } = usersSlice.actions;
export default usersSlice.reducer;
