import {createRoot} from 'react-dom/client'
import './index.css'
import {routes} from "./router/routes.tsx";
import {RouterProvider} from "react-router-dom";
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "./models/IUser.ts";

type UserSliceType = {
    users: IUser[];
}
const initialState: UserSliceType = {users: []};

const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        loadUsers:  (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        }
    }

})

export const userSliceActions ={
    ...userSlice.actions
}

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        //postSlice:null
    }
})

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>
)

