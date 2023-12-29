import React, { useState, useContext, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

import "./SearchBar.css";

function SearchBar() {

    const { setProducts } = useContext(AppContext)
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        console.log("searchValue", searchValue)
    },[searchValue])


    const handleSearch = async (event) => {
        event.preventDefault();

        const products = await fetchProducts(searchValue);
        setProducts(products);
        setSearchValue("");
    }


    return (
        <form className="search-bar" onSubmit={handleSearch}>
            
            <input type="search"
                value={searchValue}
                placeholder="Buscar Produtos"
                className="search__input"
                onChange={({ target }) => setSearchValue(target.value)}
                required
            />
            <button type="submit" className="search__button">
                <BsSearch />
            </button>
        </form>
    );
}

export default SearchBar;