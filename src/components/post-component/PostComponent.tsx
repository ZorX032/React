import {FC} from "react";
import {IPost} from "../../models/IPost.ts";
import {Link} from "react-router-dom";
// import {Link, useNavigate} from "react-router-dom";

type PostTypeProps={
    item: IPost;
}
const PostComponent: FC<PostTypeProps> = ({item}) => {
    return (
        <div>
            <Link to={'details'} state={item}>{item.title}</Link>

        </div>
    );
};

export default PostComponent;