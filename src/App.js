import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import TopNav from './components/Nav/TopNav';
import Blog from './big-components/Blog/Blog';

const App = ({ location }) => (
   <div>
      <TopNav />
      <Route location={location} path="/blog" exact component={Blog} />
   </div>
);

App.propTypes = {
   location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
   }).isRequired
};

export default App;
