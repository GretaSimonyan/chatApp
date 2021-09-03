import React, { useMemo, memo } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const getFormatedTime = ({seconds, nanoseconds}) => {
  if (!seconds) {
    return null
  }
  const dateInstance = new Date(seconds * 1000 + nanoseconds / 1000000);
  const h = dateInstance.getHours();
  const m = dateInstance.getMinutes();
  return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}`;
};

function Message({message}) {
  const formatedTime = useMemo(() => getFormatedTime(message.created), [message.created]);
  const currUser = useSelector(store => store.users.currUser);
  const isMy = currUser?.id === message.senderId;

  return (
    <div className={isMy ? styles.myMessage : styles.message}>
      <div>
        {message.text}
      </div>
      {formatedTime}
    </div>
  )
};

export default memo(Message);
