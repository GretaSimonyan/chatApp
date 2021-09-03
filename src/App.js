import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthorizedRoutes from './components/AuthorizedRoutes';
import UnauthorizedRoutes from './components/UnauthorizedRoutes';
import Header from './components/Header';
import { getLoginStatus, getUser } from './initFacebookSdk';
import { saveUserData } from './initFirebaseSdk';
import { setCurrUser } from './slices/users';
import styles from './App.module.scss';
import './initFirebaseSdk';

function App() {
  const dispatch = useDispatch();
  const currUser = useSelector((store) => store.users.currUser);

  useEffect(() => {
    getLoginStatus()
      .then(isLoggedIn => {
        if (isLoggedIn) {
          return getUser()
            .then((data) => {
              console.log('user_data', data);
              saveUserData(data)
                .then(() => dispatch(setCurrUser(data)))
            })
        }
        dispatch(setCurrUser(null));
      })
  }, []);

  return (
    <div className={styles.layout}>
      <Router>
        <Header />
        {currUser?.id ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
      </Router>
    </div>
  );
};

export default App;
