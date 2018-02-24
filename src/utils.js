import { createApolloFetch } from 'apollo-fetch';

import { SERVER_ENDPOINT } from './constants';

export const apolloFetch = createApolloFetch({
   uri: SERVER_ENDPOINT
});

export function textToReadableURL(text, url) {
   let result = text
      .toLowerCase()
      .replace(/'|’/gi, '')
      .replace(/\s+|\W+/gi, '-');
   if (result.endsWith('-')) result = result.slice(0, -1);

   return url ? url + '/' + result : result;
}
