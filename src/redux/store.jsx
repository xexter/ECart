// src/redux/store.js
import { createStore } from 'redux';

const initialState = {
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }
    case 'REMOVE_ONE_FROM_CART':
      const cartAfterDecrement = state.cart.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(item => item.quantity > 0); // Keep items with quantity greater than 0
      return { ...state, cart: cartAfterDecrement };
    case 'REMOVE_FROM_CART':
      const updatedCart = state.cart.filter((item) => item.id !== action.payload.id);
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;