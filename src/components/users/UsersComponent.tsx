import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service.ts";
import {UserComponent} from "../user/UserComponent.tsx";
import {IUsersResponse} from "../../models/IUsersResponse.ts";
import {useSearchParams} from "react-router";
import {IUser} from "../../models/IUser.ts";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage).then(({users}: IUsersResponse) => {

            setUsers(users);
        });
    }, [searchParams]);
    return (
        <div className="grid grid-cols-5 gap-4">
            {users.map((user: IUser) => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};

export default UsersComponent;