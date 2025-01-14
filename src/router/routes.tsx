import App from "../App.tsx";
import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <App/>, children: [
        {path: 'users', element:<UsersPage/>}
    ]
}]);