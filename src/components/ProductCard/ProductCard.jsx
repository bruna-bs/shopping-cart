import React, { useContext } from "react";
import { BsFillCartPlusFill } from "react-icons/bs"
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

import "./ProductCard.css";

function ProductCard({ product }) {
    const { value, name, image } = product;
    const { cartItens, setCartItens } = useContext(AppContext)

    const handleAddCart = () => {
        setCartItens([ ...cartItens, product ]);

        // const updatedCartItens = cartItens;

        // updatedCartItens.push(product);

        // setCartItens(updatedCartItens);
    };

    return (
        <section className="product-card">
            <img src={image} alt="product" className="card__image" />
            <div className="card__infos">
                <h2 className="card__price">{formatCurrency(value, "BRL")}</h2>
                <h2 className="card__title">{name}</h2>
            </div>

            <button
                type="button"
                className="button__add-cart"
                onClick={handleAddCart}
            >
                <BsFillCartPlusFill />
            </button>

        </section>
    )
}

export default ProductCard;