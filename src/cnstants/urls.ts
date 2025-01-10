const baseUrl = 'https://dummyjson.com';
export const urls ={
    users:{
        allUsers:baseUrl +'/users',
        byId:(id: number) =>{
            return baseUrl + '/' + id;
        }
    },
    carts:{
        allCarts:baseUrl +'/carts',
        byId:(id: number) =>{
            return baseUrl + '/user' + '/' + id;
        }
    },
}

