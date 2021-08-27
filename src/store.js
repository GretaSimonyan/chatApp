import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './slices/messages';
import usersReducer from './slices/users';

export default configureStore({
  reducer: {
    messages: messagesReducer,
    users: usersReducer,
  },
});
