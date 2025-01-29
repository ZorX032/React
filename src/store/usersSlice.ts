import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../types/user";
import {getUserById, getUsers} from "../api/users";
import axios from "axios";

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

// ✅ Исправленный AsyncThunk (правильный тип возвращаемых данных)
export const fetchUsers = createAsyncThunk<IUser[], number>(
    "users/fetchUsers",
    async (page) => {
        const limit = 10;
        const skip = (page - 1) * limit;
        const response = await getUsers(limit, skip); // Должен возвращать `User[]`
        return response; // Возвращаем массив `User[]`
    }
);
export const fetchUserById = createAsyncThunk<IUser, number, { rejectValue: string }>(
    'users/fetchUserById',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://dummyjson.com/users/${id}`);
            return response.data; // Single user object
        } catch (error) {
            console.log(error);
            return rejectWithValue('Failed to fetch user');
        }
    }
);

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
                state.users = action.payload; // ✅ Теперь `action.payload` имеет правильный тип `User[]`
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Ошибка загрузки пользователей";
            });
    },
});

export const { clearSelectedUser } = usersSlice.actions;
export default usersSlice.reducer;
