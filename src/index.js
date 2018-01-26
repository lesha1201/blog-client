import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import '../public/style.css';
import rootReducer from './reducers/';
import App from './App';

const store = createStore(
   rootReducer,
   composeWithDevTools()
);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);