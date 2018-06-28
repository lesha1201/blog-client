import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = ({ logout }) => {
   return (
      <nav className="nav">
         <ul className="menu">
            <li className="menu__item">
               <Link to="/blog" className="menu__link menu__link--active">
                  <ion-icon name="ios-paper" />Blog
               </Link>
            </li>
            {logout && (
               <li className="menu__item">
                  <Link to="/" className="menu__link" onClick={logout}>
                     <i className="icon ion-log-out" />Logout
                  </Link>
               </li>
            )}
         </ul>
      </nav>
   );
};

Nav.propTypes = {
   logout: PropTypes.func
};

export default Nav;
