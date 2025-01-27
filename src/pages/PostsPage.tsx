
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";

import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {postSliceActions} from "../redux/slices/postSlice/postSlice.ts";






export const PostsPage = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postSliceActions.loadPosts());
    }, []);

    return (
        <div>
            {
                posts.map( (post) => {
                    return <div key={post.id}>Title: {post.title} <br/> Post: {post.body}</div>
                })
            }
        </div>
    );
};

export default PostsPage;