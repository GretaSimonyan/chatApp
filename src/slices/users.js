import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currUser: null,
  },
  reducers: {
    setCurrUser: (state, action) => {
      state.currUser = action.payload;
    },
  },
});

export const { setCurrUser } = usersSlice.actions;

export default usersSlice.reducer;
