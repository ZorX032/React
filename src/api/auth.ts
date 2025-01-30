import api from "./axiosInstance";
import { AuthResponse } from "../types/auth";

export const login = async (username: string, password: string): Promise<AuthResponse> => {
    const response = await api.post("https://dummyjson.com/auth/login", { username, password });
    return response.data;
};
