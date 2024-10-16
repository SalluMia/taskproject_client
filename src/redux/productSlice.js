import { createSlice } from "@reduxjs/toolkit";

// Fetch existing products from localStorage
const initialProducts = JSON.parse(localStorage.getItem('products')) || [];

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: initialProducts,
  },
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
      localStorage.setItem('products', JSON.stringify(state.items)); // Save to localStorage
    }
  }
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
