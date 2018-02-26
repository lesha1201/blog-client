import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormField.scss';

class FormField extends Component {
   render() {
      return <div className="form-field">{this.props.children}</div>;
   }
}

FormField.propTypes = {
   children: PropTypes.node
};

export default FormField;
