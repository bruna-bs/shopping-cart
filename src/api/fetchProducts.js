const fetchProducts = async (query) => {

    // const response = await fetch(`https://api.mercadolibre.com/sites/MBL/search?q=${query}`);
    const response = await fetch(`http://localhost:4000/produtos`);
    const data = await response.json();

    console.log(data, "DATA")

    const imagesMock = [
        "https://box4pets.com.br/cdn/shop/products/CapturadeTela2021-05-18as14.47.17_1024x.png?v=1621360988",
        "https://portalvet.royalcanin.com.br/wp-content/uploads/2023/09/border-collie-01-800x450.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSITi3EdJjH4EyF2aew8C-5_dPxkI1tlQQ9w&usqp=CAU"
    ]
    
    return data.map((item, index) => {
        return { ...item, image: imagesMock[index] }
    })

};

export default fetchProducts;