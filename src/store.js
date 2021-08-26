import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './slices/messages';

export default configureStore({
  reducer: {
    messages: messagesReducer,
  },
});
