import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './TopNav.scss';

import Button from '../Button/Button';
import * as actions from '../../actions/user';

const TopNav = ({ authToken, logout }) => {
   return (
      <nav className="navbar">
         <Link to="/">
            <img
               className="navbar__logo"
               src="../../../public/img/twitter.svg"
            />
         </Link>
         <ul className="nav">
            <li className="nav__item">
               <Link className="nav__link" to="/blog">
                  Blog
               </Link>
            </li>
            <li className="nav__item">
               <Link className="nav__link" to="/blog">
                  Blog
               </Link>
            </li>
            <li className="nav__item">
               <Link className="nav__link" to="/blog">
                  Blog
               </Link>
            </li>
         </ul>
         {authToken ? (
            <div className="navbar__right">
               <button onClick={logout}>Logout</button>
            </div>
         ) : (
            <div className="navbar__right">
               <Button color="blue" text="Sign In" to="/signin" />
               <Button color="green" text="Sign Up" to="/signup" />
            </div>
         )}
      </nav>
   );
};

TopNav.propTypes = {
   authToken: PropTypes.string,
   logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
   return {
      authToken: state.user.token
   };
}

export default connect(mapStateToProps, { logout: actions.logout })(TopNav);
