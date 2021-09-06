import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Message from './../Message';
import { updateAllMessages } from './../../slices/messages';
import { subscribeToMessages } from './../../initFirebaseSdk';
import styles from './styles.module.scss';

export default function MessagesList() {
  const dispatch = useDispatch();
  const messagesList = useSelector((store) => store.messages.list);
  const { convId } = useParams();

  useEffect(() => {
    MessagesList.unsubscribe && MessagesList.unsubscribe();
    MessagesList.unsubscribe = subscribeToMessages(convId, (data) => dispatch(updateAllMessages(data)));
  }, [convId]);

  return (
    <div className={styles.messagesList}>
      {messagesList.map((message) => (
        <Message message={message} key={message.id}/>
      ))}
    </div>
  )
};
