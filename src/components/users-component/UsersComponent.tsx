import {useEffect, useState} from "react";
import {userService} from "../../services/api.service.ts";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers().then((allUsers)=> {
            setUsers(allUsers.users);

        })
    }, []);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;