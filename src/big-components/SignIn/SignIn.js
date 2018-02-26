import React, { Component } from 'react';
import './SignIn.scss';

import SectionHeading from '../../components/SectionHeading/SectionHeading';
import SignInForm from './SignInForm/SignInForm';

class SignIn extends Component {
   render() {
      return (
         <div className="signin">
            <SectionHeading text="Sign In" />
            <SignInForm />
         </div>
      );
   }
}

export default SignIn;
