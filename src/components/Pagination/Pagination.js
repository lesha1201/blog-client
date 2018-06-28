import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

const Pagination = ({ className, children }) => {
   return <div className={`pagination ${className}`}>{children}</div>;
};

Pagination.defaultProps = {
   className: ''
};

Pagination.propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.string
};

export default Pagination;
