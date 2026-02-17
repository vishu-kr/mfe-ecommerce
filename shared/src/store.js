import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { addToCart } from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export { addToCart };
