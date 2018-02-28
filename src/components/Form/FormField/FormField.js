import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormField.scss';
import FormFieldError from './FormFieldError';

class FormField extends Component {
   static Error = FormFieldError;

   render() {
      return <div className="form-field">{this.props.children}</div>;
   }
}

FormField.propTypes = {
   children: PropTypes.node
};

export default FormField;
