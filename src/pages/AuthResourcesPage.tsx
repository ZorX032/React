import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";


//експортуємо компонент, який відображає дані, які завантажуються з сервера, з обробкою аутентифікації
export const AuthResourcesPage = () => {
//викоритовуємо хук useEffect
    useEffect(() => {
        //викликаємо функцію яка відправляє запит для отримання списку продуктів
        loadAuthProducts().then(products => {
            //якщо запит успішний, то виводимо у консоль масив продуктів
            console.log(products)
        }).catch(reason => {
            //якщо запит завершується з помилкою, то виводимо в консоль помилку(наприклад через токен)
            console.log(reason);
            //якщо запит завершився з помилкою, викликається функція refresh, вона відправляє запит на оновлення токенів
            refresh()
                //після успішного оновлення, знову викликається функція loadAuthProducts()
                .then(() => loadAuthProducts())
                //завантажені дані виводяться у консоль
                .then(value => console.log(value))
        })
//пустий масив залежностей який вказує на те, що ефект буде виконаний лише один раз
    }, []);

    return (
        <>
            AuthResourcesPage
        </>
    );
};