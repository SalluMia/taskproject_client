import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productCartReducer from './productCartSlice';
import productReducer from './productSlice'; // Import the correct product slice

const store = configureStore({
  reducer: {
    auth: authReducer,
    productCart: productCartReducer, // Manages the shopping cart functionality
    products: productReducer,        // Manages the products data
  },
});

export default store;
