/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle',
  emailSentSuccess: null,
  error: null,
};
export const sendPasswordResetEmail = createAsyncThunk(
  'passwordReset/sendPasswordResetEmail',
  async (passwordResetEmail, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'http://localhost:5001/account/password/forgot',
        passwordResetEmail
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const passwordResetSlice = createSlice({
  name: 'passwordReset',
  initialState,
  reducers: {},
  extraReducers: {
    [sendPasswordResetEmail.pending]: (state, action) => {
      state.status = 'loading';
    },
    [sendPasswordResetEmail.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.emailSentSuccess = action.payload;
      state.error = null;
    },
    [sendPasswordResetEmail.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload.message;
      state.emailSentSuccess = null;
    },
  },
});
export default passwordResetSlice.reducer;
