import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import {initFacebookSdk} from './initFacebookSdk';
import { FBContext } from './contexts';

initFacebookSdk().then((FB) => {
  ReactDOM.render(
    <Provider store={store}>
      <FBContext.Provider value={FB}>
        <App />
      </FBContext.Provider>
    </Provider>,
    document.getElementById('root'),
  );
})

export default FBContext;
