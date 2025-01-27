import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice/userSlice.ts";
import {postSlice} from "./slices/postSlice/postSlice.ts";
import {commentSlice} from "./slices/commentsSlice/commentsSlice.ts";


export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer
    }
})
