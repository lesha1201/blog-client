import React, { Component } from 'react';
import '../Sign.scss';

import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
   render() {
      return (
         <div className="sign">
            <SectionHeading text="Sign Up" />
            <SignUpForm />
         </div>
      );
   }
}

export default SignUp;
