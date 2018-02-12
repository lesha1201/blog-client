import React from 'react';

import TopNav from './components/Nav/TopNav';
import SectionHeading from './components/SectionHeading/SectionHeading';
import TagsBox from './components/TagsBox/TagsBox';

const tagsData = [
   {
      tagname: 'JavaScript',
      quantity: 162,
      color: '#ffff00'
   },
   {
      tagname: 'React',
      quantity: 43,
      color: '#009fe3'
   }
];

const App = () => (
   <div>
      <TopNav />
      <SectionHeading text="Blog" />
      <TagsBox tags={tagsData} />
   </div>
);

export default App;
