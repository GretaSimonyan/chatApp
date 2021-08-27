import React, { useContext, useEffect, useState } from 'react';
import { FBContext } from './../../contexts';

export default function Home() {
  const FB = useContext(FBContext);
  console.log(FB)
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    FB.getLoginStatus((response) => {
      console.log('response', response);
      setLoginStatus(response.status === 'connected');
      getUserData();
    });
  }, [FB]);

  const handleLogin = () => {
    FB.login((response) => {
      console.log('response', response);
      setLoginStatus(response.status === 'connected');
      getUserData();
    });
  }
  
  const handleLogout = () => {
    FB.logout((response) => {
      console.log('response', response);
      setLoginStatus(response.status === 'connected');
    });
  }

  const getUserData = () => {
    FB.api('/me', {fields: 'last_name, first_name, picture'}, function(response) {
      console.log(response);
    });
  }

  return (
    <div>
      Home
      { loginStatus
          ? <button onClick={handleLogout}>Logout</button>
          : <button onClick={handleLogin}>Login</button>
      }
    </div>
  );
};
