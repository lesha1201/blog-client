import { createApolloFetch } from 'apollo-fetch';

import { SERVER_ENDPOINT } from './constants';

export const apolloFetch = createApolloFetch({
   uri: SERVER_ENDPOINT
});

export function setAuthHeader(token) {
   apolloFetch.use(({ options }, next) => {
      if (!options.headers) {
         options.headers = {};
      }
      options.headers['authorization'] = `Bearer ${token}`;
      next();
   });
}

export function textToReadableURL(text, id, url) {
   let result = text
      .toLowerCase()
      .replace(/'|’/gi, '')
      .replace(/\s+|\W+/gi, '-');
   if (result.endsWith('-')) result = result.slice(0, -1);
   if (id) result += '--' + id;

   return url ? url + '/' + result : result;
}
