import { createSlice } from "@reduxjs/toolkit";

const productCartSlice = createSlice({
  name: 'productCart',
  initialState: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      state.cart.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart } = productCartSlice.actions;
export default productCartSlice.reducer;
