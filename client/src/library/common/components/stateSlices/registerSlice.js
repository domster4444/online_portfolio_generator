/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  status: 'idle',
  userRegistered: null,
  error: null,
};
export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (registrationFormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/users/register',
        registrationFormData
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.userRegistered = true;
    },
    [registerUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload.message;
    },
  },
});
export default registerSlice.reducer;
