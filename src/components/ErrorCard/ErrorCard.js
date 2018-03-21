import React from 'react';
import PropTypes from 'prop-types';
import './ErrorCard.scss';

const ErrorCard = ({ message }) => {
   return <div className="error-card">{message}</div>;
};

ErrorCard.propTypes = {
   message: PropTypes.string.isRequired
};

export default ErrorCard;
