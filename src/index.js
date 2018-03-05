import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/style.scss';
import rootReducer from './reducers/';
import App from './App';
import { AUTH_TOKEN, LOADING, NO_LOADING } from './constants';
import { userAPI } from './api';
import { logout, userLoggedIn } from './actions/user';

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(ReduxThunk))
);

const token = localStorage.getItem(AUTH_TOKEN);

if (token) {
   store.dispatch({ type: LOADING });
   userAPI
      .verifyJWT(token)
      .then(res => {
         store.dispatch(userLoggedIn({ ...res, token }));
      })
      .catch(() => {
         logout()(store.dispatch);
      })
      .then(() => store.dispatch({ type: NO_LOADING }));
}

ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <Route component={App} />
      </Provider>
   </BrowserRouter>,
   document.getElementById('root')
);
