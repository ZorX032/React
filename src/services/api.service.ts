import {urls} from "../cnstants/urls.ts";

// export const userService ={
//     getUsers: async ():Promise<IUser[]> => {
//        return await fetch(urls.users.allUsers).then(value => value.json());
//     },
//     getUser: async (id:number) =>{
//         return await fetch(urls.users.byId(id)).then(value => value.json());
//     }
// }

export const userService = {
    getUsers: async () => {
        const response = await fetch(urls.users.allUsers);
        const data = await response.json();
        return data; // Возвращаем объект, содержащий ключ users
    }
};

export const postService = {
    getPosts: async () => {
        const response = await fetch(urls.posts.allPosts);
        const data = await response.json();
        return data; // Возвращаем объект, содержащий ключ users
    }
};

