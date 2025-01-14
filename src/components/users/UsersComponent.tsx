import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom"
import {IUser} from "../../models/IUser.ts";
import {getAllUsers} from "../../services/api.service.ts";
import UserComponent from "../user/UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();

    useEffect(() => {

        getAllUsers(query.get('pg') || '404')
            .then(value => setUsers(value.data));
    }, [query]);

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)

            }
        </div>
    );
};

export default UsersComponent;