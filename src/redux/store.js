import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productCartReducer from './productCartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    productCart: productCartReducer,
  },
});

export default store;
