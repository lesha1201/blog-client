import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';

const Loader = ({ color }) => <div className="loader" style={{ color }} />;

Loader.propTypes = {
   color: PropTypes.string
};

Loader.defaultProps = {
   color: '#fff'
};

export default Loader;
