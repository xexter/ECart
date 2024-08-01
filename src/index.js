// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import EcommerceCart from './components/ECommerceCart';
import './index.css';
import './App.css'; // Import the CSS file
ReactDOM.render(
  <Provider store={store}>
    <EcommerceCart />
  </Provider>,
  document.getElementById('root')
);