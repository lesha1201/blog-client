import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Form from '../../../components/Form/Form';
import Button from '../../../components/Button/Button';
import ErrorCard from '../../../components/ErrorCard/ErrorCard';
import { signup } from '../../../actions/user';
import { checkFormForErrors } from '../../../utils';

class SignUpForm extends Component {
   state = {
      userInfo: {
         username: '',
         password: '',
         confirmPassword: '',
         email: '',
         fullname: ''
      },
      errs: {}
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
            const { errs } = this.state;
            const { confirmPassword, password } = this.state.userInfo;
            if (confirmPassword !== password)
               this.setState({
                  errs: { ...errs, confirmPassword: "Passwords don't match" }
               });
            else this.setState({ errs: { ...errs, confirmPassword: '' } });
         }
      );
   };

   onSubmit = e => {
      e.preventDefault();
      const { userInfo } = this.state;
      const errs = checkFormForErrors(userInfo);
      this.setState({ errs });

      if (Object.keys(errs).length === 0)
         this.props
            .signup(userInfo)
            .then(() => this.props.history.push('/'))
            .catch(err => {
               window.scroll({ top: 0, behavior: 'smooth' });
               this.setState({
                  errs: { message: err[0].message }
               });
            });
   };

   render() {
      const { errs } = this.state;
      return (
         <div className="sign-form">
            {errs.message && <ErrorCard message={errs.message} />}
            <Form onSubmit={this.onSubmit}>
               <Form.Field>
                  <label htmlFor="username">Username</label>
                  <div style={{ position: 'relative' }}>
                     <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Your username"
                        onChange={this.onChangeUserInfo}
                     />
                     {errs.username && (
                        <Form.Field.Error text={errs.username} />
                     )}
                  </div>
               </Form.Field>
               <Form.Field>
                  <label htmlFor="password">Password</label>
                  <div style={{ position: 'relative' }}>
                     <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="************"
                        minLength="8"
                        onChange={this.onPassChange}
                     />
                     {errs.password && (
                        <Form.Field.Error text={errs.password} />
                     )}
                  </div>
               </Form.Field>
               <Form.Field>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div style={{ position: 'relative' }}>
                     <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="************"
                        minLength="8"
                        onChange={this.onPassChange}
                     />
                     {errs.confirmPassword && (
                        <Form.Field.Error text={errs.confirmPassword} />
                     )}
                  </div>
               </Form.Field>
               <Form.Field>
                  <label htmlFor="email">Email</label>
                  <div style={{ position: 'relative' }}>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        onChange={this.onChangeUserInfo}
                     />
                     {errs.email && <Form.Field.Error text={errs.email} />}
                  </div>
               </Form.Field>
               <Form.Field>
                  <label htmlFor="fullname">Full Name</label>
                  <div style={{ position: 'relative' }}>
                     <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Your full name (First Last)"
                        onChange={this.onChangeUserInfo}
                     />
                     {errs.fullname && (
                        <Form.Field.Error text={errs.fullname} />
                     )}
                  </div>
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
