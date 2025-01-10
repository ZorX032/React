import {useEffect, useState} from "react";
import {postService} from "../../services/api.service.ts";
import {IPost} from "../../models/IPost.ts";
import PostComponent from "../post-component/PostComponent.tsx";


const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getPosts().then((allPosts)=> {
            setPosts(allPosts.posts);

        })
    }, []);

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} item={post}/>)
            }
        </div>
    );
};

export default PostsComponent;