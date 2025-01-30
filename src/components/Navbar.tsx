// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {RootState} from "../store/store.ts";
//
//
// function Navbar() {
//     const user = useSelector((state: RootState) => state.auth.user);
//     console.log(user);
//     return (
//         <nav className="bg-gray-800 p-4 text-white flex justify-between">
//             <div>
//                 <Link to="/" className="mr-4">Home</Link>
//             </div>
//             <div>
//                 {user ? (
//                     <>
//                         <Link to="/users" className="mr-4">Users</Link>
//                         <Link to="/recipes" className="mr-4">Recipes</Link>
//                         <span>{user.firstName}</span>
//                     </>
//                 ) : (
//                     <Link to="/auth">Login</Link>
//                 )}
//             </div>
//         </nav>
//     );
// }
//
// export default Navbar;

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {RootState} from "../store/store.ts";


function Navbar() {
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between">
            <div>
                <Link to="/" className="mr-4">Home</Link>
            </div>
            <div>
                {user ? (
                    <>
                        <Link to="/users" className="mr-4">Users</Link>
                        <Link to="/recipes" className="mr-4">Recipes</Link>
                        <span>{user.username}</span>
                    </>
                ) : (
                    <Link to="/auth">Login</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
