import { STORE_POSTS, SET_FILTER } from '../constants';
import { blogAPI } from '../api';

export const storePosts = posts => ({ type: STORE_POSTS, posts });
export const setFilter = filter => ({ type: SET_FILTER, filter });

export const fetchPosts = () => dispatch =>
   blogAPI.getPosts().then(posts => dispatch(storePosts(posts)));
