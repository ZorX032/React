import {IUser} from "../models/IUser.ts";
const baseUrl = import.meta.env.VITE_API_URL;
export const getUsers = async ():Promise<IUser[]> => {
    const users =  await fetch(baseUrl)
        .then(value => value.json())
    return users;
}

export const getUser = async (id:string): Promise<IUser> => {
    return await fetch(baseUrl + '/' + id)
        .then(value => value.json());
}