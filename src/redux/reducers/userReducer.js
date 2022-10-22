import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getUsers } from "../../data/_DATA";

export const fetchUsers = createAsyncThunk("getUsers", async () => {
  const response = await _getUsers();
  return response;
});

export const updateQuestionAsked = createAsyncThunk(
  "updateUsersQuestions",
  async (payload) => {
    updateQuestionAsked(payload);
    const response = await _getUsers();
    return response;
  }
);

const initialState = {
  value: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateQuestionsAnswered: (state, action) => {
      const { authedUser, qid, answer } = action.payload;
      state.value[authedUser].answers[qid] = answer;
    },
    updateQuestionsAsked: (state, action) => {
      const { author, id } = action.payload;
      state.value[author].questions.push(id);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.value = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { updateQuestionsAnswered, updateQuestionsAsked } =
  usersSlice.actions;

export default usersSlice.reducer;
