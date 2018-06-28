import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import { login } from '../../actions/user';

class SignInForm extends Component {
   state = {
      userInfo: {
         username: '',
         password: ''
      },
      errs: {
         message: ''
      }
   };

   render() {
      const { errs } = this.state;

      return (
         <Form
            className="sign-card__form"
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            initState={this.state.userInfo}
            error={errs.message}
         >
            <Form.Field>
               <Form.Label label="Login" htmlFor="signin_login" />
               <Form.Input
                  icon="person"
                  name="signin_login"
                  id="signin_login"
                  dataName="username"
                  placeholder="Login"
                  type="text"
                  error={errs.username}
                  required
               />
            </Form.Field>

            <Form.Field>
               <Form.Label label="Password" htmlFor="signin_password" />
               <Form.Input
                  icon="lock"
                  name="signin_password"
                  id="signin_password"
                  dataName="password"
                  placeholder="Password"
                  type="password"
                  error={errs.password}
                  required
               />
            </Form.Field>

            <div className="sign-card__form-btns">
               <Button color="blue" size="wide">
                  Sign In
               </Button>
               <Button color="clear" className="sign-card__forgetpassword">
                  Forget password?
               </Button>
            </div>
         </Form>
      );
   }

   onChange = formData => {
      this.setState({ userInfo: formData });
   };

   onSubmit = (errs = {}) => {
      const { userInfo } = this.state;

      if (Object.keys(errs).length == 0) {
         this.props
            .login(userInfo)
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

SignInForm.propTypes = {
   history: PropTypes.object.isRequired,
   login: PropTypes.func.isRequired
};

export default connect(null, { login })(SignInForm);
