import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";

import AppContext from "../../context/AppContext";

import "./SearchBar.css";
import { fetchOneOrMoreProducts, fetchProducts } from "../../api/fetchProducts";

function SearchBar() {

    const { setProducts, setLoading } = useContext(AppContext)
    const [searchValue, setSearchValue] = useState("");

    // useEffect(() => {
    //     console.log("searchValue", searchValue)
    // },[searchValue])


    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);

        const products = await fetchOneOrMoreProducts(searchValue);
        
        setProducts(products);
        setLoading(false);
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