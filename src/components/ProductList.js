import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get('/api/products');
            setProducts(res.data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <img src={product.image} alt={product.name} />
                        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
