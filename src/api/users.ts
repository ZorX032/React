import api from "./axiosInstance";
import { IUser } from "../types/user";

export const getUsers = async (limit = 10, skip = 0): Promise<IUser[]> => {
    const response = await api.get(`/users?limit=${limit}&skip=${skip}`);
    return response.data.users;
};

export const getUserById = async (id: number): Promise<IUser> => {
    const response = await api.get(`/users/${id}`);
    return response.data;
};
