
import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type UserPropType ={
    item: IUser;
}
const UserComponent:FC<UserPropType> = ({item}) => {
    return (

            <div key={item.id}>{item.name}</div>

    );
};

export default UserComponent;