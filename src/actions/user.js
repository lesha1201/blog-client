import { USER_LOGGED_IN, USER_LOGGED_OUT, AUTH_TOKEN } from '../constants';
import { userAPI } from '../api';

export const userLoggedIn = user => ({ type: USER_LOGGED_IN, user });
export const userLoggedOut = () => ({ type: USER_LOGGED_OUT });

function authUser(user, dispatch) {
   localStorage.setItem(AUTH_TOKEN, user.token);
   dispatch(userLoggedIn(user));
}

export const login = userInfo => dispatch =>
   userAPI.login(userInfo).then(user => {
      authUser(user, dispatch);
   });

export const signup = userInfo => dispatch =>
   userAPI.signup(userInfo).then(user => {
      authUser(user, dispatch);
   });

export const logout = () => dispatch => {
   localStorage.removeItem(AUTH_TOKEN);
   localStorage.setItem('logout-event', 'true');
   dispatch(userLoggedOut());
};
