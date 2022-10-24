import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authUserSlice } from "./reducers/authUserReducer";
import { pollsSlice } from "./reducers/pollReducer";
import { usersSlice } from "./reducers/userReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  authUser: authUserSlice.reducer,
  polls: pollsSlice.reducer,
  users: usersSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
