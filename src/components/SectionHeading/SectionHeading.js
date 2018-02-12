import React from 'react';
import PropTypes from 'prop-types';

import './SectionHeading.css';

const SectionHeading = ({ text }) => (
   <div className="section-heading">
      {text[0].toUpperCase() + text.slice(1)}
   </div>
);

SectionHeading.propTypes = {
   text: PropTypes.string.isRequired
};

export default SectionHeading;
