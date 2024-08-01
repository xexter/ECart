// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No products added to the cart.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
              <div style={{ display: 'inline-block' }}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
          <p className="total">Total: ${calculateTotal().toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;