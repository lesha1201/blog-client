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
   getPosts: `
      query feed($filter: String, $skip: Int, $limit: Int) { 
         feed(filter: $filter, skip: $skip, limit: $limit) {
            articles {
               id
               img
               title
            }
            count
         }
      }
   `,
   getPost: `
      query getPost($id: String!) {
         getPost(id: $id) {
            id
            title
            img
            text
            author {
               fullName
            }
            tags
            createdAt
         }
      }
   `,
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
   `,
   updatePost: `
      mutation updatePost($id: ID!, $input: ArticleInput!) {
         updatePost(id: $id, input: $input) {
            id
         }
      }
   `,
   deletePost: `
      mutation deletePost($id: ID!) {
         deletePost(id: $id) {
            id
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
   getPosts: (filter, skip, limit) =>
      apolloFetch({
         query: query.getPosts,
         variables: { filter, skip, limit }
      }).then(res => res.data.feed),
   getPost: id =>
      apolloFetch({ query: query.getPost, variables: { id } }).then(
         res => res.data.getPost
      ),
   createPost: data =>
      apolloFetch({ query: query.createPost, variables: { input: data } }).then(
         res => res.data.createPost
      ),
   updatePost: (id, data) =>
      apolloFetch({
         query: query.updatePost,
         variables: { id, input: data }
      }).then(res => res.data.updatePost),
   deletePost: id =>
      apolloFetch({ query: query.deletePost, variables: { id } }).then(
         res => res.data.deletePost
      )
};
