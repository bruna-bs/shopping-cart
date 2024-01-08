export const fetchAllProducts = async () => {
    const response = await fetch(`http://localhost:3000/produtos/`);
    const data = await response.json();
    return data;
};

export const fetchProducts = async (query) => {
    const response = await fetch(`http://localhost:3000/produtos/name/${query}`);
    const data = await response.json();
    return data;
};

export const fetchOneOrMoreProducts = async (query) => {
    const has = query ? await fetchProducts(query) : await fetchAllProducts(); 
    console.log("has", has)
    return has 
};