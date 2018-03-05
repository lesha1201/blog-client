import { combineReducers } from 'redux';

import blog from './blog';
import user from './user';
import loading from './loading';

const rootReducer = combineReducers({
   blog,
   user,
   loading
});

export default rootReducer;
