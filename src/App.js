import React from 'react';

import TopNav from './components/Nav/TopNav';
import SectionHeading from './components/SectionHeading/SectionHeading';
import Blog from './big-components/Blog/Blog';

const App = () => (
   <div>
      <TopNav />
      <SectionHeading text="Blog" />
      <Blog />
   </div>
);

export default App;
