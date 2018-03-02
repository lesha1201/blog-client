import { USER_LOGGED_IN, USER_LOGGED_OUT, AUTH_TOKEN } from '../constants';
import api from '../api';

export const userLoggedIn = user => ({ type: USER_LOGGED_IN, user });
export const userLoggedOut = () => ({ type: USER_LOGGED_OUT });

function authUser(user, dispatch) {
   localStorage.setItem(AUTH_TOKEN, user.token);
   dispatch(userLoggedIn(user));
}

export const login = userInfo => dispatch =>
   api.user.login(userInfo).then(user => {
      authUser(user, dispatch);
   });

export const signup = userInfo => dispatch =>
   api.user.signup(userInfo).then(user => {
      authUser(user, dispatch);
   });

export const logout = () => dispatch => {
   localStorage.removeItem(AUTH_TOKEN);
   dispatch(userLoggedOut());
};
