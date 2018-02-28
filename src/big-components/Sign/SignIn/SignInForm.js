import React, { Component } from 'react';

import Form from '../../../components/Form/Form';
import Button from '../../../components/Button/Button';

class SignInForm extends Component {
   state = {
      username: '',
      password: ''
   };

   onChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   render() {
      return (
         <div className="sign-form">
            <Form>
               <Form.Field>
                  <label htmlFor="username">Username</label>
                  <input
                     type="text"
                     id="username"
                     name="username"
                     placeholder="Your username"
                     onChange={this.onChange}
                  />
               </Form.Field>
               <Form.Field>
                  <label htmlFor="password">Password</label>
                  <input
                     type="password"
                     id="password"
                     name="password"
                     placeholder="************"
                     onChange={this.onChange}
                  />
               </Form.Field>
               <Button color="blue" text="Sign In" />
               <Button to="/signup" color="link" text="Sign Up" />
            </Form>
         </div>
      );
   }
}

export default SignInForm;
