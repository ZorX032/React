const baseUrl = 'https://dummyjson.com';
export const urls ={
    users:{
        allUsers:baseUrl +'/users',
        byId:(id: number) =>{
            return baseUrl + '/' + id;
        }
    },
    posts:{},
}

