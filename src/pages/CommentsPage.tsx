//
// import {useEffect} from "react";
// import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
//
// import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
// import {postSliceActions} from "../redux/slices/postSlice/postSlice.ts";






import {commentSliceActions} from "../redux/slices/commentsSlice/commentsSlice.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";

export const CommentPage = () => {
    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentSliceActions.loadComments());
    }, []);

    return (
        <div>
            {
                comments.map( (comment) => {
                    return <div key={comment.id}>Name: {comment.name} <br/>Body: {comment.body}</div>
                })
            }
        </div>
    );
};

export default CommentPage;