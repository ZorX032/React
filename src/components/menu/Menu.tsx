import {Link} from "react-router-dom";

const Menu = () => {
    return (
        //створємо блок з клікабельним меню
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/login'}>login</Link></li>
                <li><Link to={'/auth/resources'}>resources</Link></li>
            </ul>
            <hr/>

        </div>
    );
};

export default Menu;