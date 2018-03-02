import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Form from '../../../components/Form/Form';
import Button from '../../../components/Button/Button';
import { login } from '../../../actions/user';

class SignInForm extends Component {
   state = {
      userInfo: {
         username: '',
         password: ''
      }
   };

   onChangeUserInfo = e => {
      this.setState({
         userInfo: { ...this.state.userInfo, [e.target.name]: e.target.value }
      });
   };

   onSubmit = e => {
      e.preventDefault();

      const { userInfo } = this.state;
      this.props.login(userInfo).then(() => this.props.history.push('/'));
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
                     onChange={this.onChangeUserInfo}
                  />
               </Form.Field>
               <Button color="blue" text="Sign In" />
               <Button to="/signup" color="link" text="Sign Up" />
            </Form>
         </div>
      );
   }
}

SignInForm.propTypes = {
   history: PropTypes.shape({
      push: PropTypes.func.isRequired
   }).isRequired,
   login: PropTypes.func.isRequired
};

export default withRouter(connect(null, { login })(SignInForm));
