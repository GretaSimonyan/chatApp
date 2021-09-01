import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthorizedRoutes from './components/AuthorizedRoutes';
import UnauthorizedRoutes from './components/UnauthorizedRoutes';
import Header from './components/Header';
import { getLoginStatus, getUser } from './initFacebookSdk';
import { setLoggedIn } from './slices/users';
import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  const loggedin = useSelector((store) => store.users.loggedIn);

  useEffect(() => {
    getLoginStatus()
      .then(isLoggedIn => {
        if (isLoggedIn) {
          return getUser()
            .then(() => {
              dispatch(setLoggedIn(true));
            })
        }
        dispatch(setLoggedIn(false));
      })
  }, []);

  return (
    <div className={styles.layout}>
      <Router>
        <Header />
        {loggedin ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
      </Router>
    </div>
  );
};

export default App;
