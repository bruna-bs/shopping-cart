import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs"
import formatCurrency from "../../utils/formatCurrency";

import "./ProductCard.css";

function ProductCard( {product} ) {
   const { price, name } = product
console.log("dataqwr", product)
    return (
        <section className="product-card">
            <img src="https://box4pets.com.br/cdn/shop/products/CapturadeTela2021-05-18as14.47.17_1024x.png?v=1621360988" alt="product" className="card__image" />
            <div className="card__infos">
                <h2 className="card__price">{formatCurrency(price, "BRL")}</h2>
                <h2 className="card__title">{name}</h2>
            </div>
            
            <button type="button" className="button__add-cart">
                <BsFillCartPlusFill />
            </button>

        </section>
    )
}

export default ProductCard;