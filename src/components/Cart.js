import React, { useState, useEffect } from 'react';

const Cart = ({ cartItems, onRemove }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cartItems.reduce((sum, item) => sum + item.price, 0));
    }, [cartItems]);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button onClick={() => onRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
        </div>
    );
};

export default Cart;
