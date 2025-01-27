import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {commentSliceActions} from "../redux/slices/commentsSlice/commentsSlice.ts";
import {postSliceActions} from "../redux/slices/postSlice/postSlice.ts";


export const ComplexPage = () => {

    const dispath = useAppDispatch();
    const {
        commentSlice: {comments},
        userSlice: {users},
        postSlice: {posts}
    } = useAppSelector(state => state);

    useEffect(()=>{
        if(!users.length){
            dispath(userSliceActions.loadUsers());
        }
        if(!posts.length){
            dispath(postSliceActions.loadPosts());
        }
        if(!comments.length){
            dispath(commentSliceActions.loadComments());
        }
    })


    return (
        <div>

        </div>
    );
};

export default ComplexPage;