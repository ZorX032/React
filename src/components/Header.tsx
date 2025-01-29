import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { logout } from "../store/authSlice";
import { Link } from "react-router-dom";

const Header = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();

    return (
        <header className="bg-blue-600 p-4 flex justify-between">
            <h1 className="text-white text-xl">My App</h1>
            <nav>
                {user ? (
                    <>
                        <Link to="/users" className="text-white mx-2">Users</Link>
                        <Link to="/recipes" className="text-white mx-2">Recipes</Link>
                        <button onClick={() => dispatch(logout())} className="bg-red-500 px-3 py-1 text-white rounded">
                            Logout
                        </button>
                        <img src={user.image} alt="User" className="w-10 h-10 rounded-full inline ml-2" />
                    </>
                ) : (
                    <Link to="/login" className="text-white">Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
