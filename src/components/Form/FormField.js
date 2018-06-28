import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ children, width }) => {
   return (
      <div className="form-field" style={{ width }}>
         {children}
      </div>
   );
};

FormField.defaultProps = {
   width: 'auto'
};

FormField.propTypes = {
   children: PropTypes.node.isRequired,
   width: PropTypes.string
};

export default FormField;
