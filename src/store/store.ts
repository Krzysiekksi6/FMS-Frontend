import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "src/api/apiSlice";
import authReducer from "src/components/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
