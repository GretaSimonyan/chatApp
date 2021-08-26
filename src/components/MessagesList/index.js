import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Message from './../Message';

export default function MessagesList() {
  const [state, setState] = useState(0);
  const messagesList = useSelector((state) => state.messages.list);

  return (
    <div>
      {messagesList.map((message) => (
        <Message message={message} key={message.id}/>
      ))}
      <button onClick={() => setState(state + 2)}>{state}</button>
    </div>
  )
};
