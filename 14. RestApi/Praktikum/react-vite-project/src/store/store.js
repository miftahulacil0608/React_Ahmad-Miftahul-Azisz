import { configureStore } from "@reduxjs/toolkit";
import products from "../store/productSlice";

const store = configureStore({
  reducer: {
    products,
  },
});

export default store;