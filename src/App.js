import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import TopNav from './components/Nav/TopNav';
import Blog from './big-components/Blog/Blog';
import SignIn from './big-components/Sign/SignIn/SignIn';
import SignUp from './big-components/Sign/SignUp/SignUp';
import CreatePost from './big-components/CreatePost/CreatePost';
import Loader from './components/Loader/Loader';
import NotFound from './components/NotFound/NotFound';
import ModeratorRoute from './components/Routes/ModeratorRoute';

const App = ({ location, loading }) => {
   if (loading) return <Loader color="#304ffe" />;
   return (
      <div>
         <TopNav />
         <Switch>
            <Route location={location} path="/blog" exact component={Blog} />
            <Route
               location={location}
               path="/signin"
               exact
               component={SignIn}
            />
            <Route
               location={location}
               path="/signup"
               exact
               component={SignUp}
            />
            <ModeratorRoute
               location={location}
               path="/create"
               exact
               component={CreatePost}
            />
            <Route component={NotFound} />
         </Switch>
      </div>
   );
};

App.propTypes = {
   location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
   }).isRequired,
   loading: PropTypes.bool
};

function mapStateToProps({ loading }) {
   return { loading };
}

export default connect(mapStateToProps)(App);
