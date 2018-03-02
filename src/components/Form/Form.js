import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

import FormField from './FormField/FormField';

class Form extends Component {
   state = {};

   static Field = FormField;

   render() {
      const { onSubmit } = this.props;
      return (
         <form onSubmit={onSubmit && onSubmit} className="form">
            {this.props.children}
         </form>
      );
   }
}

Form.propTypes = {
   children: PropTypes.node,
   onSubmit: PropTypes.func
};

export default Form;
