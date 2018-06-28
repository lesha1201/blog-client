import React from 'react';
import PropTypes from 'prop-types';
import './Tag.scss';

const Tag = ({ className, bgColor, textColor, children }) => {
   return (
      <div
         className={`tag ${className || ''}`}
         style={{ backgroundColor: bgColor, color: textColor }}
      >
         {children}
      </div>
   );
};

Tag.propTypes = {
   children: PropTypes.string.isRequired,
   textColor: PropTypes.string.isRequired,
   bgColor: PropTypes.string.isRequired,
   className: PropTypes.string
};

export default Tag;
