import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import TopNav from './components/Nav/TopNav';
import Blog from './big-components/Blog/Blog';
import SignIn from './big-components/SignIn/SignIn';

const App = ({ location }) => (
   <div>
      <TopNav />
      <Route location={location} path="/blog" exact component={Blog} />
      <Route location={location} path="/signin" exact component={SignIn} />
   </div>
);

App.propTypes = {
   location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
   }).isRequired
};

export default App;
