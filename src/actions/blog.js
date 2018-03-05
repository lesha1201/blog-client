import { STORE_POSTS } from '../constants';
import { blogAPI } from '../api';

export const storePosts = posts => ({ type: STORE_POSTS, posts });

export const fetchPosts = () => dispatch =>
   blogAPI.getPosts().then(posts => dispatch(storePosts(posts)));
