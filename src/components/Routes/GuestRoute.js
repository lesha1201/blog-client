import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

const GuestRoute = ({ isAuth, component: Component, ...rest }) => (
   <Route
      {...rest}
      render={props =>
         !isAuth ? (
            <Component {...props} />
         ) : (
            <Redirect
               to={{ pathname: '/blog', state: { from: props.location } }}
            />
         )
      }
   />
);

GuestRoute.propTypes = {
   isAuth: PropTypes.bool.isRequired,
   component: PropTypes.func.isRequired,
   location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
   }).isRequired
};

function mapStateToProps(state) {
   return {
      isAuth: !!state.user.token
   };
}

export default connect(mapStateToProps)(GuestRoute);
