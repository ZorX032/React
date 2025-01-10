import './Menu.css'
import {Link} from "react-router-dom";


const Menu = () => {
    return (
        <div>
           <ul>
               <li><Link to={'/'}>home</Link></li>
               <li><Link to={'users'}>users</Link></li>
               <li><Link to={'carts'}>carts</Link></li>
           </ul>
        </div>
    );
};

export default Menu;