import { LOADING, NO_LOADING } from '../constants';

export default function loading(state = false, action) {
   switch (action.type) {
      case LOADING:
         return true;
      case NO_LOADING:
         return false;
      default:
         return state;
   }
}
