import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormFieldError extends Component {
   state = {
      showText: false
   };

   onMouseEnter = () => {
      this.setState({ showText: true });
   };

   onMouseLeave = () => {
      this.setState({ showText: false });
   };

   render() {
      const { text } = this.props;
      const { showText } = this.state;
      return (
         <div
            className="form-field__error"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
         >
            {showText && <div className="form-field__error__text">{text}</div>}
         </div>
      );
   }
}

FormFieldError.propTypes = {
   text: PropTypes.string
};

export default FormFieldError;
