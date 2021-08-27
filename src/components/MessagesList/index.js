import React from 'react';
import { useSelector } from 'react-redux';
import Message from './../Message';

export default function MessagesList() {
  const messagesList = useSelector((store) => store.messages.list);

  return (
    <div>
      {messagesList.map((message) => (
        <Message message={message} key={message.id}/>
      ))}
    </div>
  )
};
