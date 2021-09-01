import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from './../../slices/messages';
import styles from './styles.module.scss';

export default function MessageComposer() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const formHandleSubmit = (event) => {
    event?.preventDefault();
    dispatch(addMessage(text));
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
