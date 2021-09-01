import React from 'react';
import MessagesList from './../../components/MessagesList';
import MessageComposer from './../../components/MessageComposer';
import styles from './styles.module.scss';

export default function Chat() {
  return (
    <div className={styles.chatLayout}>
      <div className={styles.usersList}>
        <div>User 1</div>
        <div>User 2</div>
      </div>
      <div className={styles.chat}>
        <MessagesList />
        <MessageComposer />
      </div>
    </div>
  );
};
