import { createSlice } from '@reduxjs/toolkit';

export const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: {
    list: [],
  },
  reducers: {
    updateAllConversations: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { updateAllConversations } = conversationsSlice.actions;

export default conversationsSlice.reducer;
