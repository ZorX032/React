import axios from 'axios';
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";
//Типізуємо LoginData
type LoginData = {
    //вказуємо що username та password будуть стрінгою
    username: string;
    password: string;
    // вказуємо що буде числом
    expiresInMins: number
}

//створюємо axios
const axiosInstance = axios.create({
    //базова урла для всіх запитів
    baseURL: 'https://dummyjson.com/auth',
    //об'єкт заголовків
    headers: {}
});

//Перехоплювач запитів які являються GET
axiosInstance.interceptors.request.use((requestObject) => {
    //у випадку якщо requestObject.method переведений до UpperCase буде дорівнювати GET
    if (requestObject.method?.toUpperCase() === 'GET') {
        //то в requestObject додаємо хедер Authorization який дорівнює
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;

})

//створюємо метод login, далі стрілочна функція яка приймає об'єкт LoginData з якого ми деструктуруємо інформацію
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    //робимо постовий запит, який несе в собі IUserWithTokens, з урлою /login та данними username, password, expiresInMins
    //перед = робимо деструктуризацію
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    //виводимо у консоль параметр data
    console.log(userWithTokens);
    //зберігаємо отримані дані в локальне сховище з ключем user
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}
//завантажуємо аутинтифіковані продукти, з аунтифікованої точки
//повертаємо Promise<IProduct[]>
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    //робимо get запит, який несе в собі IProductsResponseModelType, з урлою /products'
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');

    return products
}

//створюємо функцію, асинхронний запит
export const refresh = async () => {
     // дістаємо з локального сховища юзера
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    //робимо постовий запит на /refresh, отримуємо для нього оновленні токени
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    //беремо користувача який існує в локальному сховищі, звертаємось до характеристики accessToken і впроваджуємо йому оновленний токен
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    //зберігаємо оновлені дані в локалному сховищі
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));


}