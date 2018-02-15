import React from 'react';
import './Blog.css';

import TagsBox from '../../components/TagsBox/TagsBox';
import RightBlock from '../../components/RightBlock/RightBlock';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

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

const Blog = () => (
   <div>
      <SectionHeading text="Blog" />
      <div className="blog-section">
         <TagsBox tags={tagsData} />
         <RightBlock />
      </div>
   </div>
);

export default Blog;
