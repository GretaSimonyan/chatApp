import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../initFirebaseSdk';

export const fetchUsers = createAsyncThunk(
  'users/fetchList',
  async (ids, {getState}) => {
    if(!ids?.length) return [];
    const usersMap = getState().users.usersMap;
    const actualIds = ids.filter(id => !usersMap[id]);
    return getUsers(actualIds);
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currUser: null,
    usersMap: {},
  },
  reducers: {
    setCurrUser: (state, action) => {
      state.currUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      action.payload.forEach(user => {
        state.usersMap[user.id] = user;
      });
    })
  },
});

export const { setCurrUser } = usersSlice.actions;

export default usersSlice.reducer;
