import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from './../../slices/messages';

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
      formHandleSubmit();
    }
  };

  return (
    <form onSubmit={formHandleSubmit}>
      <textarea
        rows={5}
        value={text}
        onKeyDown={handleKeyPress}
        onChange={event => setText(event.target.value)}
      />
      <button type="submit">
        addMessage
      </button>
    </form>
  )
};
