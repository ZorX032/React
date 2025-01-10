import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import {Link} from "react-router-dom";
// import {Link, useNavigate} from "react-router-dom";

type UserTypeProps={
    item: IUser;
}
const UserComponent: FC<UserTypeProps> = ({item}) => {
    return (
        <div>
            <Link to={'details'} state={item}>{item.username}</Link>

        </div>
    );
};

export default UserComponent;