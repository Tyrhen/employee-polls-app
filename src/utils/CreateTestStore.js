import { configureStore } from "@reduxjs/toolkit";
import { authUserSlice } from "../redux/reducers/authUserReducer";
import { pollsSlice } from "../redux/reducers/pollReducer";
import { usersSlice } from "../redux/reducers/userReducer";

export default function createTestStore(preloadedState = {}) {
  const createStore = configureStore({
    reducer: {
      authUser: authUserSlice.reducer,
      polls: pollsSlice.reducer,
      users: usersSlice.reducer,
    },
    preloadedState,
  });

  return createStore;
}
