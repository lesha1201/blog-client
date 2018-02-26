import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/style.scss';
import rootReducer from './reducers/';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <Route component={App} />
      </Provider>
   </BrowserRouter>,
   document.getElementById('root')
);
