import {useEffect, useState} from "react";
import {cartService} from "../../services/api.service.ts";
import {ICart} from "../../models/ICart.ts";
import CartComponent from "../post-component/CartComponent.tsx";




const CartsComponent = () => {

    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        cartService.getCarts().then((allCarts)=> {
            setCarts(allCarts.carts);


        })
    }, []);

    return (
        <div>
            {
                carts.map(cart => <CartComponent key={cart.id} item={cart}/>)
            }
        </div>
    );
};

export default CartsComponent;