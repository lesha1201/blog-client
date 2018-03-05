import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

const ModeratorRoute = ({ isModerator, component: Component, ...rest }) => (
   <Route
      {...rest}
      render={props =>
         isModerator ? (
            <Component {...props} />
         ) : (
            <Redirect
               to={{
                  pathname: '/signin',
                  state: { from: props.location }
               }}
            />
         )
      }
   />
);

ModeratorRoute.propTypes = {
   isModerator: PropTypes.bool.isRequired,
   component: PropTypes.func.isRequired,
   location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
   }).isRequired
};

function mapStateToProps(state) {
   const role = state.user.role;
   return {
      isModerator: role === 'moderator' || role === 'admin'
   };
}

export default connect(mapStateToProps)(ModeratorRoute);
