import React from 'react';
import MessagesList from './../../components/MessagesList';
import MessageComposer from './../../components/MessageComposer';

export default function Chat() {
  return (
    <>
      <MessagesList />
      <MessageComposer />
    </>
  );
}