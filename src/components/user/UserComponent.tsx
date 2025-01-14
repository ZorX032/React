import {FC} from 'react';
import {IUser} from "../../models/IUser.ts";

type PropsType ={
    item: IUser
}

const UserComponent: FC<PropsType> = ({item}) => {
    return (
        <div>
            <div>{item.id} {item.firstName}</div>
            {/*<img src={item.} alt={item.last_name}/>*/}
            
        </div>
    );
};

export default UserComponent;