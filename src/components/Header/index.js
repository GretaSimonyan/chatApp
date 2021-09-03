import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './../../initFacebookSdk';
import { setCurrUser } from '../../slices/users';
import styles from './styles.module.scss';

function Header() {
  const dispatch = useDispatch();
  const currUser = useSelector((store) => store.users.currUser);

  const handleClick = () => {
    logout()
      .then(() => {
        dispatch(setCurrUser(null));
      })
  };

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        {
          currUser?.id &&
          <Link to="/chat" className={styles.link}>Chat</Link>
        }
      </div>
      <div className={styles.left}>
        {
          currUser?.id &&
          <Link to="/users" className={styles.link}>Users</Link>
        }
      </div>
      <div className={styles.right}>
        {
          currUser?.id &&
          <button onClick={handleClick}>Sign Out</button>
        }
      </div>
    </div>
  );
}

export default Header;
