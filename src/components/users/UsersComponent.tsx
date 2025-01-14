import {useEffect, useState} from "react";

import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.ts";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);


    useEffect(() => {

        getUsers('1').then({users}:IUsersResponse)=>{
            setUsers(users);
        };
    }, []);

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)

            }
        </div>
    );
};

export default UsersComponent;