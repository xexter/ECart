// src/components/EcommerceCart.js
import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './ECommerceCart.css';

const EcommerceCart = () => {
  return (
    <div className="container">
      <div className="box">
        <ProductList />
      </div>
      <div className="box">
        <Cart />
      </div>
    </div>
  );
};

export default EcommerceCart;