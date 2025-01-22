import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";

//Експортуємо об'єкт зі шляхами routes, який створюється за допомогою createBrowserRouter
//всередину передаємо масив зі шляхами, які у нас будуть
export const routes = createBrowserRouter([
    {
        //створюємо початковий шлях, який відповідає корню сайта, наприклад https://example.com/ і елемент
        //який буде за нього відповідати.
        path: '/', element: <MainLayout/>, children: [
            //додаємо дочірні елементи в MainLayout
            //index true означає що це буде початковий шлях для батьківського URL
            {index: true, element: <HomePage/>},
            {path: 'login', element: <LoginPage/>},
            {path: '/auth/resources', element: <AuthResourcesPage/>},
        ]
    }
]);