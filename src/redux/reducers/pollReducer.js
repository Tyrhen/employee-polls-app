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

export const createNewPoll = createAsyncThunk(
  "createNewPoll",
  async (formValues) => {
    await _saveQuestion(formValues);
    const response = await _getQuestions();
    return response;
  }
);

const initialState = {
  value: {},
};

export const pollsSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {
    recordPollAnswer: (state, action) => {
      const { authedUser, qid, answer } = action.payload;
      state.value[qid][answer].votes.push(authedUser);
      _saveQuestionAnswer(action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPolls.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(createNewPoll.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { createNewPollUI, recordPollAnswer } = pollsSlice.actions;

export default pollsSlice.reducer;
