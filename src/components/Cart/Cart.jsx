import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

import "./Cart.css";

function Cart() {
    const { cartItens, isCartVisible } = useContext(AppContext);

    const totalPrice = cartItens.reduce((acc, item) => {
        const value = Number(item.value);
        return value + acc;
    }, 0);

    return (
        <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
            <div className="cart-items">
                {cartItens.map((cartItem, index) =>
                    <CartItem key={index} data={cartItem} />
                )}
            </div>
            <div className="cart-resume"> {formatCurrency(totalPrice, "BRL")}</div>
        </section>
    );
}

export default Cart;