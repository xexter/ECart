// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import EcommerceCart from './components/EcommerceCart'; // Ensure this matches the file name exactly
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <EcommerceCart />
  </Provider>,
  document.getElementById('root')
);