import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './../../initFacebookSdk';
import { setLoggedIn } from '../../slices/users';

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
    <div>
      {
        loggedin &&
          <div className="container">
            <button onClick={handleClick}>Sign Out</button>
          </div>
      }
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
