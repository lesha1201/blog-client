import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Blog from './big-components/Blog/Blog';
import PostPage from './big-components/PostPage/PostPage';
import Loader from './components/Loader/Loader';
import NotFound from './components/NotFound/NotFound';
// Routes
import ModeratorRoute from './components/Routes/ModeratorRoute';
import GuestRoute from './components/Routes/GuestRoute';
import LeftSidebar from './big-components/Sidebars/LeftSidebar/LeftSidebar';
import MainBlock from './big-components/MainBlock/MainBlock';
import RightSidebar from './big-components/Sidebars/RightSidebar/RightSidebar';
import AddPost from './big-components/AddPost/AddPost';
import SignPage from './big-components/Sign/SignPage';

const App = ({ location, loading }) => {
   if (loading) return <Loader color="#304ffe" />;
   return (
      <React.Fragment>
         <LeftSidebar />
         <MainBlock>
            <Switch>
               <Route
                  location={location}
                  path={/^\/(blog)?$/i}
                  exact
                  component={Blog}
               />
               <Route
                  location={location}
                  path="/blog/add"
                  exact
                  component={AddPost}
               />
               <ModeratorRoute
                  location={location}
                  path="/blog/edit/:id"
                  exact
                  component={AddPost}
               />
               <Route
                  location={location}
                  path="/blog/:id/:title?"
                  exact
                  component={PostPage}
               />
               <GuestRoute
                  location={location}
                  path="/signin"
                  exact
                  component={SignPage}
               />
               <GuestRoute
                  location={location}
                  path="/signup"
                  exact
                  component={SignPage}
               />
               <Route component={NotFound} />
            </Switch>
         </MainBlock>
         <RightSidebar />
      </React.Fragment>
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
