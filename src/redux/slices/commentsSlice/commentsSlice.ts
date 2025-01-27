
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../../models/IComment.ts";


type CommentsSlice = {
    comments: IComment[];
    loadState: boolean;
}
const initialState: CommentsSlice = {comments: [], loadState: false};

const loadComments = createAsyncThunk('commentSlice/loadComments',
    async (_ , thunkAPI) => {
        try {
            const comment = await fetch('https://jsonplaceholder.typicode.com/comments')
                .then(value => value.json());
            console.log(comment)
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(comment);
        }catch (e){
            console.log(e);
            return thunkAPI.rejectWithValue('some error');
        }
    });



export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initialState,
    reducers: {
        changeLoadState : (state, action:PayloadAction<boolean>) => {
            state.loadState = action.payload

        }
    },
    extraReducers: builder =>
        builder.addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
        })
            .addCase(loadComments.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })

            .addMatcher(isFulfilled(loadComments), (state)=>{
                state.loadState = true;

            })
            .addMatcher(isRejected(loadComments), (state) => {
                console.log(state);
            })
});

export const commentSliceActions ={
    ...commentSlice.actions, loadComments
}