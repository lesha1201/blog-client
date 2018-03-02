import { combineReducers } from 'redux';

import articles from './articles';
import user from './user';
import loading from './loading';

const rootReducer = combineReducers({
   articles,
   user,
   loading
});

export default rootReducer;
