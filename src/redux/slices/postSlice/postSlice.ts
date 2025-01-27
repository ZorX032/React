import {IPost} from "../../../models/IPost.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";


type PostSliceType = {
    posts: IPost[];
    loadState: boolean;
}
const initialState: PostSliceType = {posts: [], loadState: false};

const loadPosts = createAsyncThunk('postSlice/loadPosts',
    async (_ , thunkAPI) => {
        try {
            const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json());
            console.log(posts)
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(posts);
        }catch (e){
            console.log(e);
            return thunkAPI.rejectWithValue('some error');
        }
    });



export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {
        changeLoadState : (state, action:PayloadAction<boolean>) => {
            state.loadState = action.payload

        }
    },
    extraReducers: builder =>
        builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })

            .addMatcher(isFulfilled(loadPosts), (state)=>{
                state.loadState = true;

            })
            .addMatcher(isRejected(loadPosts), (state) => {
                console.log(state);
            })
});

export const postSliceActions ={
    ...postSlice.actions, loadPosts
}