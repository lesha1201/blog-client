import React from 'react';
import PropTypes from 'prop-types';

import './SectionHeading.scss';

const SectionHeading = ({ text }) => {
   const words = text.split(' ');

   return (
      <div className="section-heading">
         {words.map((word, inx) => (
            <span className="section-heading__word" key={word + inx}>
               {word}&nbsp;
            </span>
         ))}
      </div>
   );
};

SectionHeading.propTypes = {
   text: PropTypes.string.isRequired
};

export default SectionHeading;
