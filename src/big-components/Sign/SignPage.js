import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import './SignPage.scss';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class SignPage extends Component {
   renderForm() {
      const { location, history } = this.props;
      if (location.pathname == '/signin') {
         return <SignInForm history={history} />;
      } else if (location.pathname == '/signup') {
         return <SignUpForm history={history} />;
      }
   }

   render() {
      const { location } = this.props;

      return (
         <div className="card sign-card">
            <div className="sign-card__head">
               <Link
                  to="/signin"
                  className={`sign-card__btn sign-card__btn--left 
                     ${location.pathname == '/signin' &&
                        'sign-card__btn--active'}`}
               >
                  Sign In
               </Link>
               <Link
                  to="signup"
                  className={`sign-card__btn sign-card__btn--right 
                     ${location.pathname == '/signup' &&
                        'sign-card__btn--active'}`}
               >
                  Sign Up
               </Link>
            </div>
            {this.renderForm()}
         </div>
      );
   }
}

SignPage.propTypes = {
   history: PropTypes.object.isRequired,
   location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
   }).isRequired
};

export default withRouter(SignPage);
