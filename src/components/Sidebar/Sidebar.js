import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';

const Sidebar = ({ className, children }) => {
   return <sidebar className={`sidebar ${className}`}>{children}</sidebar>;
};

Sidebar.propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.string
};

export default Sidebar;
