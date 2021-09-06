import React from 'react';
import { useParams } from 'react-router-dom';
import MessagesList from './../../components/MessagesList';
import MessageComposer from './../../components/MessageComposer';
import ConversationsList from './../../components/ConversationsList';
import styles from './styles.module.scss';

export default function Chat() {
  const { convId } = useParams();
  
  return (
    <div className={styles.chatLayout}>
      <div className={styles.conversationsList}>
        <ConversationsList />
      </div>
      { convId && <div className={styles.chat}>
          <MessagesList />
          <MessageComposer />
        </div>
      }
    </div>
  );
};
