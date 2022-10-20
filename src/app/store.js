import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./reducers/apiReducer";
import { authUserSlice } from "./reducers/authUserReducer";

export const store = configureStore({
  reducer: {
    authUser: authUserSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
