import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Conversation from './../Conversation';
import { updateAllConversations } from './../../slices/conversations';
import { subscribeToConversations } from './../../initFirebaseSdk';
import styles from './styles.module.scss';

export default function ConversationsList() {
  const dispatch = useDispatch();
  const conversationsList = useSelector((store) => store.conversations.list);

  useEffect(() => {
    const unsubscribe = subscribeToConversations(data => dispatch(updateAllConversations(data)));
    return unsubscribe;
  }, []);
  console.log('conversationsList', conversationsList);
  return (
    <div className={styles.conversationsList}>
      {conversationsList.map((conversation) => (
        <div key={conversation.id}>
          {conversation.lastMessageText}
        </div>
      ))}
    </div>
  )
};
