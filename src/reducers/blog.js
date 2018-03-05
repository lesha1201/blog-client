import { STORE_POSTS } from '../constants';

export default function blog(state = { posts: [] }, action) {
   switch (action.type) {
      case STORE_POSTS:
         return { ...state, posts: action.posts };
      default:
         return state;
   }
}
