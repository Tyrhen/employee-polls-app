import { configureStore } from "@reduxjs/toolkit";
import { authUserSlice } from "./reducers/authUserReducer";
import { pollsSlice } from "./reducers/pollReducer";
import { usersSlice } from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    authUser: authUserSlice.reducer,
    polls: pollsSlice.reducer,
    users: usersSlice.reducer,
  },
});
