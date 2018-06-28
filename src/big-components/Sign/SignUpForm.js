import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import { signup } from '../../actions/user';

class SignUpForm extends Component {
   state = {
      userInfo: {
         username: '',
         password: '',
         confpass: '',
         email: '',
         fullName: '',
         avatar: ''
      },
      errs: {}
   };

   render() {
      const { errs } = this.state;

      return (
         <Form
            className="sign-card__form"
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            initState={this.state.userInfo}
         >
            <Form.Field>
               <Form.Label label="Login" htmlFor="signup_login" />
               <Form.Input
                  icon="person"
                  name="signup_login"
                  id="signup_login"
                  dataName="username"
                  placeholder="Login"
                  type="text"
                  error={errs.username}
                  required
               />
            </Form.Field>

            <Form.Group>
               <Form.Field width="48%">
                  <Form.Label label="Password" htmlFor="signup_password" />
                  <Form.Input
                     icon="lock"
                     name="signup_password"
                     id="signup_password"
                     dataName="password"
                     placeholder="Password"
                     type="password"
                     error={errs.password}
                     required
                  />
               </Form.Field>
               <Form.Field width="48%">
                  <Form.Label
                     label="Confirm Password"
                     htmlFor="signup_confpass"
                  />
                  <Form.Input
                     icon="lock"
                     name="signup_confpass"
                     id="signup_confpass"
                     dataName="confpass"
                     placeholder="Confirm Password"
                     type="password"
                     error={errs.confpass}
                     required
                  />
               </Form.Field>
            </Form.Group>

            <Form.Field>
               <Form.Label label="Email" htmlFor="signup_email" />
               <Form.Input
                  icon="mail"
                  name="signup_email"
                  id="signup_email"
                  dataName="email"
                  placeholder="Email"
                  type="email"
                  error={errs.email}
                  required
               />
            </Form.Field>

            <Form.Field>
               <Form.Label label="Full Name" htmlFor="signup_fullname" />
               <Form.Input
                  icon="contact"
                  name="signup_fullname"
                  id="signup_fullname"
                  dataName="fullName"
                  placeholder="Full name"
                  type="text"
                  error={errs.fullName}
                  required
               />
            </Form.Field>

            <Form.Field>
               <Form.Label label="Avatar URL" htmlFor="signup_avatar" />
               <Form.Input
                  icon="link"
                  name="signup_avatar"
                  id="signup_avatar"
                  dataName="avatar"
                  placeholder="Avatar URL"
                  type="text"
               />
            </Form.Field>

            <div className="sign-card__form-btns">
               <Button color="green">Sign Up</Button>
            </div>
         </Form>
      );
   }

   onChange = formData => {
      this.setState({ userInfo: formData });
   };

   onSubmit = (errs = {}) => {
      const userInfo = Object.assign({}, this.state.userInfo);
      delete userInfo.confpass;

      if (Object.keys(errs).length == 0) {
         this.props
            .signup(userInfo)
            .then(() => this.props.history.push('/blog'))
            .catch(err =>
               this.setState({
                  errs: { message: err[0].message }
               })
            );
      } else {
         this.setState({ errs });
      }
   };
}

SignUpForm.propTypes = {
   history: PropTypes.object.isRequired,
   signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignUpForm);
