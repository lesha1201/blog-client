import { apolloFetch } from './utils';

const query = {
   verifyJWT: `
      query verifyJWT($token: String!) {
         verifyJWT(token: $token) {
            username
            email
            fullName
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
            }
         }
      }
   `
};

export default {
   user: {
      login: userInfo =>
         apolloFetch({ query: query.signin, variables: userInfo }).then(
            res => ({ ...res.data.signin.user, token: res.data.signin.token })
         ),
      signup: userInfo =>
         apolloFetch({ query: query.signup, variables: userInfo }).then(
            res => ({ ...res.data.signup.user, token: res.data.signup.token })
         ),
      verifyJWT: token =>
         apolloFetch({ query: query.verifyJWT, variables: { token } }).then(
            res => {
               if (res.errors) throw res.errors[0].message;
               else return res.data.verifyJWT;
            }
         )
   }
};
