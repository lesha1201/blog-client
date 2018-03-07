import { apolloFetch } from './utils';

const query = {
   verifyJWT: `
      query verifyJWT($token: String!) {
         verifyJWT(token: $token) {
            username
            email
            fullName
            role
         }
      }
   `,
   signin: `
      mutation signin($username: String!, $password: String!) {
         signin(username: $username, password: $password) {
            token
            user {
               username
               email
               fullName
               role
            }
         }
      }
   `,
   signup: `
      mutation createUser($username: String!, $email: String!, $password: String!, $fullname: String!) {
         signup(
            username: $username,
            email: $email,
            password: $password,
            fullName: $fullname
         ) {
            token
            user {
               username
               email
               fullName
               role
            }
         }
      }
   `,
   allTags: `{ 
      allTags {
         tagname
         quantity
         color
      }
   }`,
   getPosts: `{ 
      feed {
         id
         img
         title
      }
   }`,
   createPost: `
      mutation createPost($input: ArticleInput!) {
         createPost(input: $input) {
            id
            title
            author {
               fullName
            }
         }
      }
   `
};

export const userAPI = {
   login: userInfo =>
      apolloFetch({ query: query.signin, variables: userInfo }).then(res => ({
         ...res.data.signin.user,
         token: res.data.signin.token
      })),
   signup: userInfo =>
      apolloFetch({ query: query.signup, variables: userInfo }).then(res => ({
         ...res.data.signup.user,
         token: res.data.signup.token
      })),
   verifyJWT: token =>
      apolloFetch({ query: query.verifyJWT, variables: { token } }).then(
         res => {
            if (res.errors) throw res.errors[0].message;
            else return res.data.verifyJWT;
         }
      )
};

export const blogAPI = {
   getAllTags: () =>
      apolloFetch({ query: query.allTags }).then(res => res.data.allTags),
   getPosts: () =>
      apolloFetch({ query: query.getPosts }).then(res => res.data.feed),
   createPost: data =>
      apolloFetch({ query: query.createPost, variables: { input: data } }).then(
         res => res.data.createPost
      )
};
