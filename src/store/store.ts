import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import usersReducer from "./usersSlice";
import recipesReducer from "./recipesSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        recipes: recipesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;