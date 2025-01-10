import {useLocation} from "react-router-dom";
// import {IUser} from "../models/IUser.ts";
import {ICart} from "../models/ICart.ts";


const UserCart = () => {

    const {state} = useLocation();
    const cart = state as ICart;
    console.log(cart.totalProducts)
    return (


        <div>
            {cart.totalProducts}

        </div>

    );

};

export default UserCart;