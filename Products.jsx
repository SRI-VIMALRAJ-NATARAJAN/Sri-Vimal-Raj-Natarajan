import React, { useState, useEffect } from "react";

const Products = () => {
    const [data, setData] = useState([]);
    const productURL = "https://fakestoreapi.com/products";

    useEffect(() => {
        fetch(productURL)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log("Error:", error));
    }, []);

    console.log(`Before => ${data.length}`);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {data.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
