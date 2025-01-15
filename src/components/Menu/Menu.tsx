import {Link} from "react-router";


const Menu = () => {
    return (
        <ul className="flex space-x-4 bg-gray-800 p-4 text-white">
            <li>
                <Link to='/cars' className="hover:text-blue-400">Cars</Link>
            </li>
            <li>
                <Link to='/cars/create' className="hover:text-blue-400">Create</Link>
            </li>
        </ul>
    );
};

export default Menu;