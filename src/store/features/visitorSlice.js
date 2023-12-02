// visitorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const visitorSlice = createSlice({
  name: 'visitor',
  initialState: {
    visitorData: null,
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.visitorData = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    }
  },
});

export const { setData, setLoading, setError } = visitorSlice.actions;
// export const selectVisitorData = (state) => state.visitor.data;

export default visitorSlice.reducer;
