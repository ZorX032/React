import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {commentSliceActions} from "../redux/slices/commentsSlice/commentsSlice.ts";
import {postSliceActions} from "../redux/slices/postSlice/postSlice.ts";



export const ComplexPage = () => {

    const dispatch = useAppDispatch();
    const {
        commentSlice: {comments},
        userSlice: {users},
        postSlice: {posts}
    } = useAppSelector(state => state);

    useEffect(()=>{
        if(!users.length){
            dispatch(userSliceActions.loadUsers());
        }
        if(!posts.length){
            dispatch(postSliceActions.loadPosts());
        }
        if(!comments.length){
            dispatch(commentSliceActions.loadComments());
        }
    })


    return (
        <div>

        </div>
    );
};

export default ComplexPage;