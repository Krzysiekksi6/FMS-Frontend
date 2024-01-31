import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "src/api/apiSlice";
import authReducer from "src/components/features/auth/authSlice";
import userReducer from "src/components/features/users/userSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    userDetails: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
