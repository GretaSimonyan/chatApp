import React from 'react';
import { useSelector } from 'react-redux';
import Message from './../Message';
import styles from './styles.module.scss';

export default function MessagesList() {
  const messagesList = useSelector((store) => store.messages.list);

  return (
    <div className={styles.messagesList}>
      {messagesList.map((message) => (
        <Message message={message} key={message.id}/>
      ))}
    </div>
  )
};
