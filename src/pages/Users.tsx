import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/usersSlice";
import { RootState } from "../store/store";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";

const Users = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state: RootState) => state.users);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchUsers(page));
    }, [dispatch, page]);

    return (
        <div>
            <h1 className="text-2xl font-bold">Users</h1>
            <SearchBar onSearch={(query) => console.log("Searching for:", query)} />
            {loading && <p>Loading...</p>}
            <div className="grid grid-cols-3 gap-4">
                {users.map((user) => <UserCard key={user.id} user={user} />)}
            </div>
            <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
        </div>
    );
};

export default Users;
