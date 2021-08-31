import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './../../initFacebookSdk';
import { setLoggedIn } from '../../slices/users';
import './index.scss';

export default function Home() {
  const dispatch = useDispatch();

  const handleClick = () => {
    login()
      .then( isLoggedIn => {
        dispatch(setLoggedIn(isLoggedIn));
      })
  };
  
  return (
    <div className="container">
      <h1>Login</h1>
      <button onClick={handleClick} className="btn">Sign in</button>
    </div>
  );
};
