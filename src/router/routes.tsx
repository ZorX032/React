import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import UserPage from "../pages/UserPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout/>,
        children:
            [
                {path: 'users', element: <UsersPage/>},
                {path: 'posts', element: <PostsPage/>},
                {path: 'users/:id', element: <UserPage/>},
                {index:true, element: <HomePage/>},
            ]
    },

])