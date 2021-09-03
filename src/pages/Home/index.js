import React from 'react';
import { useDispatch } from 'react-redux';
import { login, getUser } from '../../initFacebookSdk';
import { setCurrUser } from '../../slices/users';
import { saveUserData } from '../../initFirebaseSdk';
import './index.scss';

export default function Home() {
  const dispatch = useDispatch();

  const handleClick = () => {
    login()
      .then( isLoggedIn => {
        if (isLoggedIn) {
          return getUser()
            .then((data) => {
              console.log('user_data', data);
              saveUserData(data)
                .then(() => dispatch(setCurrUser(data)))
            })
        }
      })
  };
  
  return (
    <div className="container">
      <h1>Login</h1>
      <button onClick={handleClick} className="btn">Sign in</button>
    </div>
  );
};
