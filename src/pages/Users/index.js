import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUser, saveConversationData } from '../../initFirebaseSdk';
import styles from './styles.module.scss';

export default function Users() {
  const [users, setUsers] = useState([]);
  const currUser = useSelector((store) => store.users.currUser);
  const history = useHistory();

  useEffect(() => {
    getUser()
      .then((usersList) => {
        setUsers(usersList);
      })
  }, []);

  const handleClick = id => {
    saveConversationData(currUser.id, id)
      .then((convId) => history.push(`/${convId}`));
  };
  
  return (
    <div className={styles.usersList}>
      {
        users.map(user => (
          <div className={styles.user} key={user.id}>
            <img src={user.avatarUrl} alt={user.last_name} className={styles.avatar}/>
            <div className={styles.name}>
              {user.first_name} {user.last_name}
            </div>
            <button onClick={() => handleClick(user.id)}>Start Chat</button>
          </div>
        ))
      }
    </div>
  );
};
