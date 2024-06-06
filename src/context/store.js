import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import productsSlice from "./slice/productsSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
