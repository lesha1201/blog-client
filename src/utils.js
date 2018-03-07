import { createApolloFetch } from 'apollo-fetch';

import { SERVER_ENDPOINT, AUTH_TOKEN } from './constants';

export const apolloFetch = createApolloFetch({
   uri: SERVER_ENDPOINT
});

const token = localStorage.getItem(AUTH_TOKEN);
if (token) {
   apolloFetch.use(({ options }, next) => {
      if (!options.headers) {
         options.headers = {};
      }
      options.headers['authorization'] = `Bearer ${token}`;
      next();
   });
}

export function textToReadableURL(text, url) {
   let result = text
      .toLowerCase()
      .replace(/'|’/gi, '')
      .replace(/\s+|\W+/gi, '-');
   if (result.endsWith('-')) result = result.slice(0, -1);

   return url ? url + '/' + result : result;
}
