import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getUsers } from "../../_DATA";

export const fetchUsers = createAsyncThunk("getUsers", async () => {
  const response = await _getUsers();
  return response;
});

const initialState = {
  value: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.value = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function

export default usersSlice.reducer;
