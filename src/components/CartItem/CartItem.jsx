import React, { useContext } from "react";
import { BsCartDashFill } from "react-icons/bs";
import formatCurrency from "./../../utils/formatCurrency";

import "./CartItem.css";
import AppContext from "../../context/AppContext";

function CartItem({ data }) {

    const { cartItens, setCartItens } = useContext(AppContext);
    // const {id, image, value, name } = data;
    const { id ,image, value, name } = data;
    const handleRemoveItem = () => {
        const updatedItem = cartItens.filter((item) => item.id !== id)
        setCartItens(updatedItem)
    }

    return (
        <section className="cart-item">
            <img
                src={image}
                alt="imagem do produto"
                className="cart-item-image" />

            <div className="cart-item-content">
                <h3 className="cart-item-title">{name}</h3>
                <h3 className="cart-item-price">{formatCurrency(value, "BRL")}</h3>

                <button 
                    type="button"
                    className="button__remove-item"
                    onClick={handleRemoveItem}
                >
                    <BsCartDashFill />
                </button>
            </div>

        </section>
    );
}

export default CartItem;