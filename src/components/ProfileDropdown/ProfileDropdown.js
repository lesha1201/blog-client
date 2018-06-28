import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProfileDropdown.scss';

class ProfileDropdown extends Component {
   state = {
      hideMenu: true
   };

   toggleMenu = () => {
      this.setState(prevState => ({
         hideMenu: !prevState.hideMenu
      }));
   };

   render() {
      const { hideMenu } = this.state;
      return (
         <div className="profile-dropdown">
            <div className="avatar-box">
               <img
                  className="avatar-box__img"
                  src={this.props.avatar}
                  alt="avatar"
               />
               <div className="avatar-box__arrow" onClick={this.toggleMenu}>
                  &#x25BC;
               </div>
            </div>
            <ul
               className={`${hideMenu && 'avatar-nav--hide'} ${!hideMenu &&
                  'avatar-nav--animated'} avatar-nav`}
            >
               <li className="avatar-nav__item">
                  <Link className="avatar-nav__link" to="/blog">
                     <i className="ion-person" />Profile
                  </Link>
               </li>
               <li className="avatar-nav__item">
                  <button
                     className="avatar-nav__btn"
                     onClick={this.props.onLogout}
                  >
                     <i className="ion-android-exit" />Logout
                  </button>
               </li>
            </ul>
         </div>
      );
   }
}

ProfileDropdown.propTypes = {
   onLogout: PropTypes.func.isRequired,
   avatar: PropTypes.string.isRequired
};

export default ProfileDropdown;
