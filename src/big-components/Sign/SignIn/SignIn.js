import React, { Component } from 'react';
import '../Sign.scss';

import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import SignInForm from './SignInForm';

class SignIn extends Component {
   render() {
      return (
         <div className="sign">
            <SectionHeading text="Sign In" />
            <SignInForm />
         </div>
      );
   }
}

export default SignIn;
