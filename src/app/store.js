import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./reducers/apiReducer";
import { authUserSlice } from "./reducers/authUserReducer";
import { pollsSlice } from "./reducers/pollReducer";
import { usersSlice } from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    authUser: authUserSlice.reducer,
    polls: pollsSlice.reducer,
    users: usersSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
