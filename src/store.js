import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './slices/messages';
import usersReducer from './slices/users';
import conversationsReducer from './slices/conversations';

export default configureStore({
  reducer: {
    messages: messagesReducer,
    users: usersReducer,
    conversations: conversationsReducer,
  },
});
