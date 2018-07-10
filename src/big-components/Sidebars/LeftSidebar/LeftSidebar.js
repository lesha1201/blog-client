import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './LeftSidebar.scss';

import AvatarBlock from '../../../components/AvatarBlock/AvatarBlock';
import Nav from '../../../components/Nav/Nav';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Button from '../../../components/Button/Button';
import { logout as logoutAction } from '../../../actions/user';

class LeftSidebar extends Component {
   render() {
      const { authToken, avatar, fullName } = this.props;
      return (
         <Sidebar className="left-sidebar">
            {authToken ? (
               <AvatarBlock color="#fff" src={avatar} name={fullName} />
            ) : (
               <div className="left-sidebar__head">
                  <Button to="/signup" color="green">
                     Sign Up
                  </Button>
                  <Button to="/signin" color="clear">
                     Sign In
                  </Button>
               </div>
            )}
            <Nav logout={authToken && this.props.logout} />
         </Sidebar>
      );
   }
}

LeftSidebar.propTypes = {
   authToken: PropTypes.string,
   avatar: PropTypes.string,
   fullName: PropTypes.string,
   logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
   return {
      authToken: state.user.token,
      avatar: state.user.avatar,
      fullName: state.user.fullName
   };
}

export default connect(
   mapStateToProps,
   { logout: logoutAction }
)(LeftSidebar);
