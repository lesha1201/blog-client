import React from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';

const Heading = ({ text }) => {
   return <h1 className="page-heading">{text}</h1>;
};

Heading.propTypes = {
   text: PropTypes.string.isRequired
};

export default Heading;
