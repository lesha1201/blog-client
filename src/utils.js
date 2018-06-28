import { createApolloFetch } from 'apollo-fetch';
import querystring from 'querystring';

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

export function parseQueryString(query) {
   if (!query) return {};
   const fields = query.substr(query.indexOf('?') + 1);
   return querystring.parse(fields);
}

export const checkFormForErrors = data => {
   const errs = {};
   const keys = Object.keys(data);
   keys.forEach(key => {
      if (typeof data[key] == 'string' && data[key].trim().length <= 0)
         errs[key] = "Can't be blank.";
   });
   return errs;
};

export const checkImgUrl = url => {
   const regex = /\.(png|svg|jpe?g|gif)/gi;
   if (!regex.test(url)) return 'Invalid URL';
};

export function fillObject(target, source) {
   const newObject = Object.assign({}, target);
   for (let key in newObject) {
      newObject[key] = source[key];
   }
   return newObject;
}
