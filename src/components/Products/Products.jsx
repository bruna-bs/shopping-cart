import React, { useState, useEffect } from "react";

import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";


function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            console.log("response", response)
            setProducts(response);
            setLoading(false)
        });
    }, [])

    console.log(products, "productss")

    return (
        (loading && <Loading />) || (
            <section className="products container">
                <Loading />
                {products.map((product, index) => {
                    return (<ProductCard key={product.id} product={product} />)
                })}
            </section>)
    )
};

export default Products;