import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './../../initFacebookSdk';
import { setLoggedIn } from '../../slices/users';
import styles from './styles.module.scss';

function Header() {
  const dispatch = useDispatch();
  const loggedin = useSelector((store) => store.users.loggedIn);

  const handleClick = () => {
    logout()
      .then(isLoggedIn => {
        dispatch(setLoggedIn(isLoggedIn));
      })
  };

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        {
          loggedin &&
          <Link to="/chat" className={styles.link}>Chat</Link>
        }
      </div>
      <div className={styles.right}>
        {
          loggedin &&
          <button onClick={handleClick}>Sign Out</button>
        }
      </div>
    </div>
  );
}

export default Header;
