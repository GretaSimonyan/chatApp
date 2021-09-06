import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import cn from 'classnames';
import styles from './styles.module.scss';

export default function Conversation({user, conversation}) {
  const { convId } = useParams();
  const history = useHistory();
  if(!user?.id) return null;

  const handleClick = () => {
    history.push(`/${conversation.id}`);
  }

  return (
    <div
      key={conversation.id}
      className={cn({[styles.conversation]: true, [styles.active]: convId === conversation.id})}
      onClick={handleClick}
    >
      <img src={user.avatarUrl} alt={user.first_name} className={styles.image}/>
      <div className={styles.userInfo}>
        <div className={styles.name}>{user.first_name} {user.last_name}</div>
        <div className={styles.message}>{conversation.lastMessageText}</div>
      </div>
    </div>
  )
};
