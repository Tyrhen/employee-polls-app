import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../../data/_DATA";

export const fetchPolls = createAsyncThunk("getPolls", async () => {
  const response = await _getQuestions();
  return response;
});

const initialState = {
  value: {},
};

export const pollsSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {
    createNewPoll: (state, action) => {
      _saveQuestion(action.payload);
      state.value = async () => await _getQuestions();
    },
    recordPollAnswer: (state, action) => {
      _saveQuestionAnswer(action.payload);
      state.value = async () => await _getQuestions();
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPolls.fulfilled, (state, action) => {
      // Add user to the state array
      state.value = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { createNewPoll, recordPollAnswer } = pollsSlice.actions;

export default pollsSlice.reducer;
