import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

import FormField from './FormField/FormField';

class Form extends Component {
   state = {};

   static Field = FormField;

   render() {
      return <form className="form">{this.props.children}</form>;
   }
}

Form.propTypes = {
   children: PropTypes.node
};

export default Form;
