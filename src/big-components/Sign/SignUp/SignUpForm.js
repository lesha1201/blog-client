import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Form from '../../../components/Form/Form';
import Button from '../../../components/Button/Button';
import { signup } from '../../../actions/user';

class SignUpForm extends Component {
   state = {
      userInfo: {
         username: '',
         password: '',
         confirmPassword: '',
         email: '',
         fullname: ''
      },
      errors: {}
   };

   onChangeUserInfo = e => {
      this.setState({
         userInfo: { ...this.state.userInfo, [e.target.name]: e.target.value }
      });
   };

   onPassChange = e => {
      this.setState(
         {
            userInfo: {
               ...this.state.userInfo,
               [e.target.name]: e.target.value
            }
         },
         function() {
            const { errors } = this.state;
            const { confirmPassword, password } = this.state.userInfo;
            if (confirmPassword !== password)
               this.setState({
                  errors: { ...errors, confpas: "Passwords don't match" }
               });
            else this.setState({ errors: { ...errors, confpas: '' } });
         }
      );
   };

   onSubmit = e => {
      e.preventDefault();

      const { userInfo } = this.state;
      this.props.signup(userInfo).then(() => this.props.history.push('/'));
   };

   render() {
      return (
         <div className="sign-form">
            <Form onSubmit={this.onSubmit}>
               <Form.Field>
                  <label htmlFor="username">Username</label>
                  <input
                     type="text"
                     id="username"
                     name="username"
                     placeholder="Your username"
                     onChange={this.onChangeUserInfo}
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
                     onChange={this.onChangeUserInfo}
                  />
               </Form.Field>
               <Form.Field>
                  <label htmlFor="fullname">Full Name</label>
                  <input
                     type="text"
                     id="fullname"
                     name="fullname"
                     placeholder="Your full name (First Last)"
                     onChange={this.onChangeUserInfo}
                  />
               </Form.Field>
               <Button color="green" text="Sign Up" />
               <Button to="/signin" color="link" text="Sign In" />
            </Form>
         </div>
      );
   }
}

SignUpForm.propTypes = {
   history: PropTypes.shape({
      push: PropTypes.func.isRequired
   }).isRequired,
   signup: PropTypes.func.isRequired
};

export default withRouter(connect(null, { signup })(SignUpForm));
