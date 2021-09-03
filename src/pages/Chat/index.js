import React from 'react';
import MessagesList from './../../components/MessagesList';
import MessageComposer from './../../components/MessageComposer';
import ConversationsList from './../../components/ConversationsList';
import styles from './styles.module.scss';

export default function Chat() {
  
  return (
    <div className={styles.chatLayout}>
      <div className={styles.conversationsList}>
        <ConversationsList />
      </div>
      <div className={styles.chat}>
        <MessagesList />
        <MessageComposer />
      </div>
    </div>
  );
};
