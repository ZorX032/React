// import {ITodo} from "../models/ITodo.ts";

// import {ITodo} from "../models/ITodo.ts";

import {ITodo} from "../models/ITodo.ts";
const baseUrl = import.meta.env.VITE_API_URL;


export const getTodos = async ():Promise<ITodo[]> => {
    const response =  await fetch(baseUrl).then(value => value.json())
    
    return response.todos;
}

// export const getTodo = async (id:string): Promise<ITodo> => {
//     return await fetch(baseUrl + '/' + id)
//         .then(value => value.json());
// }