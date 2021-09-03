import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessage } from './../../slices/messages';
import { sendMessage } from './../../initFirebaseSdk';
import styles from './styles.module.scss';

export default function MessageComposer() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { convId } = useParams();
  const currUser = useSelector((store) => store.users.currUser);

  const formHandleSubmit = (event) => {
    event?.preventDefault();
    dispatch(addMessage(text));
    sendMessage(text, convId, currUser.id)
    setText('');
  };
  
  const handleKeyPress = (event) => {
    if(event.code === 'Enter' && !event.shiftKey && !event.ctrlKey) {
      event.preventDefault();
      text.trim() && formHandleSubmit();
    }
  };

  return (
    <form onSubmit={formHandleSubmit} className={styles.form}>
      <textarea
        rows={1}
        value={text}
        onKeyDown={handleKeyPress}
        onChange={event => setText(event.target.value)}
        className={styles.textarea}
      />
      <div className={styles.btnWrapper}>
        <button type="submit" className={styles.btn}>
          Add message
        </button>
      </div>
    </form>
  )
};
