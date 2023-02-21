import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { productsApi } from "../features/api/apiSlice";
import cartReducer from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
