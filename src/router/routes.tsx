import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import UserPage from "../pages/UserPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import ComplexPage from "../pages/ComplexPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout/>,
        children:
            [
                {path: 'users', element: <UsersPage/>},
                {path: 'posts', element: <PostsPage/>},
                {path: 'comments', element: <CommentsPage/>},
                {path: 'users/:id', element: <UserPage/>},
                {path: 'complex', element: <ComplexPage/>},
                {index:true, element: <HomePage/>},
            ]
    },

])