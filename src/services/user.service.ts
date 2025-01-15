import axios from 'axios';
import {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{'Content-Type':'application/json'},
});

export const getAllUsers = async():Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users');
    return data;
}

export const saveUser = async (user:IUser): Promise<IUser> =>{
   const {data} =  await axiosInstance.post<IUser>('/users', user);

    return data;
}

axiosInstance.interceptors.request.use((request) => {

    console.log(request)
    request.headers.set("XXX", "XXXX");
    console.log(request.method)
    return request;
});

