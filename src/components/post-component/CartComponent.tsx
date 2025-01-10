import {FC} from "react";
import {ICart} from "../../models/ICart.ts";
import {Link} from "react-router-dom";
// import {Link, useNavigate} from "react-router-dom";

type CartTypeProps={
    item: ICart;
}
const CartComponent: FC<CartTypeProps> = ({item}) => {
    return (
        <div>
            <Link to={'details'} state={item}>{item.total}</Link>

        </div>
    );
};

export default CartComponent;