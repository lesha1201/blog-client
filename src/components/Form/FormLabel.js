import React from 'react';
import PropTypes from 'prop-types';

const FormLabel = ({ label, htmlFor }) => {
   return (
      <div className="form-field__label">
         <label htmlFor={htmlFor}>{label}</label>
      </div>
   );
};

FormLabel.propTypes = {
   label: PropTypes.string.isRequired,
   htmlFor: PropTypes.string.isRequired
};

export default FormLabel;
