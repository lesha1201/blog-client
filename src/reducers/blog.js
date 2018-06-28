import { STORE_POSTS, SET_FILTER } from '../constants';

export default function blog(
   state = {
      posts: [],
      filter: {
         title: '',
         categories: [],
         sortby: 'Newest'
      }
   },
   action
) {
   switch (action.type) {
      case STORE_POSTS:
         return { ...state, posts: action.posts };
      case SET_FILTER:
         return { ...state, filter: { ...state.filter, ...action.filter } };
      default:
         return state;
   }
}
