import { apolloFetch } from './utils';

const query = {
   verifyJWT: `
      query verifyJWT($token: String!) {
         verifyJWT(token: $token) {
            username
            email
            fullName
            role
            avatar
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
               avatar
            }
         }
      }
   `,
   signup: `
      mutation createUser($username: String!, $email: String!, $password: String!, $fullName: String!) {
         signup(
            username: $username,
            email: $email,
            password: $password,
            fullName: $fullName
         ) {
            token
            user {
               username
               email
               fullName
               role
               avatar
            }
         }
      }
   `,
   getCategories: `{ 
      getCategories {
         value
         label
      }
   }`,
   getPosts: `
      query feed($filter: FilterInput, $skip: Int, $limit: Int) { 
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
               avatar
            }
            comments {
               author {
                  id
                  fullName
                  avatar
               }
               text
               createdAt
            }
            categories {
               value
               label
            }
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
   `,
   addCommentToPost: `
      mutation addCommentToPost($postId: ID!, $commentText: String!) {
         addCommentToPost(postId: $postId, commentText: $commentText) {
            author {
               id
               fullName
               avatar
            }
            text
            createdAt
         }
      }
   `
};

export const userAPI = {
   login: userInfo =>
      apolloFetch({ query: query.signin, variables: userInfo })
         .then(res => {
            if (res.errors && res.errors.length > 0) throw res.errors;
            else
               return {
                  ...res.data.signin.user,
                  token: res.data.signin.token
               };
         })
         .catch(err => {
            throw err;
         }),
   signup: userInfo =>
      apolloFetch({ query: query.signup, variables: userInfo })
         .then(res => {
            if (res.errors && res.errors.length > 0) throw res.errors;
            return {
               ...res.data.signup.user,
               token: res.data.signup.token
            };
         })
         .catch(err => {
            throw err;
         }),
   verifyJWT: token =>
      apolloFetch({ query: query.verifyJWT, variables: { token } }).then(
         res => {
            if (res.errors) throw res.errors[0].message;
            else return res.data.verifyJWT;
         }
      )
};

export const blogAPI = {
   getCategories: () =>
      apolloFetch({ query: query.getCategories }).then(
         res => res.data.getCategories
      ),
   getPosts: (filter, skip, limit) =>
      apolloFetch({
         query: query.getPosts,
         variables: { filter, skip, limit }
      }).then(res => res.data.feed),
   getPost: id =>
      apolloFetch({ query: query.getPost, variables: { id } }).then(
         res => res && res.data && res.data.getPost
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
      ),
   addCommentToPost: (postId, commentText) =>
      apolloFetch({
         query: query.addCommentToPost,
         variables: { postId, commentText }
      }).then(res => res.data.addCommentToPost)
};
