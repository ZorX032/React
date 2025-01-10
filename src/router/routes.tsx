import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import CartsPage from "../pages/CartsPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import UserCart from "../pages/UserCart.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout/>,
        children:
            [
                {path: 'users', element: <UsersPage/>},
                {path: 'users/details', element: <UserCart/>},
                {path: 'carts', element: <CartsPage/>},
                {index:true, element: <HomePage/>},
            ]
    },

])