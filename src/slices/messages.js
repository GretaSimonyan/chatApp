import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    list: [],
  },
  reducers: {
    addMessage: (state, action) => {
      const list = [...state.list, {
        text: action.payload,
        id: uuidv4(),
        created: (new Date()).toString(),
      }];
      state.list = list;
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
