import React, { Component } from 'react';

import Form from '../../../components/Form/Form';
import Button from '../../../components/Button/Button';

class SignUpForm extends Component {
   state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      fullname: '',
      errors: {}
   };

   onChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   onPassChange = e => {
      this.setState(
         {
            [e.target.name]: e.target.value
         },
         function() {
            const { confirmPassword, password, errors } = this.state;
            if (confirmPassword !== password)
               this.setState({
                  errors: { ...errors, confpas: "Passwords don't match" }
               });
            else this.setState({ errors: { ...errors, confpas: '' } });
         }
      );
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
                     onChange={this.onPassChange}
                  />
               </Form.Field>
               <Form.Field>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div style={{ position: 'relative' }}>
                     <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="************"
                        onChange={this.onPassChange}
                     />
                     {this.state.errors.confpas && (
                        <Form.Field.Error text={this.state.errors.confpas} />
                     )}
                  </div>
               </Form.Field>
               <Form.Field>
                  <label htmlFor="email">Email</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="Your email"
                     onChange={this.onChange}
                  />
               </Form.Field>
               <Form.Field>
                  <label htmlFor="fullname">Full Name</label>
                  <input
                     type="text"
                     id="fullname"
                     name="fullname"
                     placeholder="Your full name (First Last)"
                     onChange={this.onChange}
                  />
               </Form.Field>
               <Button color="green" text="Sign Up" />
               <Button to="/signin" color="link" text="Sign In" />
            </Form>
         </div>
      );
   }
}

export default SignUpForm;
