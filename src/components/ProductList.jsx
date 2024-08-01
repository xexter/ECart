// src/components/ProductList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css'; // Import the CSS file

const Products = [
  { id: 1, name: 'Product-1', price: 100, image: 'https://images.macrumors.com/t/SuHt0iQuSjaO-ExOZzJieONGf_I=/2500x/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg' }, // Add image URL
  { id: 2, name: 'Product-2', price: 200, image: 'https://www.digitaltrends.com/wp-content/uploads/2023/02/macbook-pro-14-m2-max.jpg?fit=1425%2C896&p=1' }, // Add image URL
  { id: 3, name: 'Product-3', price: 300, image: 'https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg' }, // Add image URL
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_ONE_FROM_CART', payload: product });
  };

  const getProductQuantity = (productId) => {
    const productInCart = cart.find(item => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <div>
      <h2>Products</h2>
      {Products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
          <div style={{ display: 'inline-block' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <div>
              <button onClick={() => addToCart(product)}>+</button>
              <span style={{ margin: '0 1vw' }}>{getProductQuantity(product.id)}</span>
              <button onClick={() => removeFromCart(product)}>-</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;