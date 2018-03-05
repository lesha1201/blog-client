import React, { Component } from 'react';
import './Blog.css';

import TagsBox from '../../components/TagsBox/TagsBox';
import RightBlock from '../../components/RightBlock/RightBlock';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { blogAPI } from '../../api';

class Blog extends Component {
   state = {
      tags: []
   };

   componentDidMount() {
      blogAPI.getAllTags().then(tags => this.setState({ tags }));
   }

   render() {
      return (
         <div>
            <SectionHeading text="Blog" />
            <div className="blog-section">
               <TagsBox tags={this.state.tags} />
               <RightBlock />
            </div>
         </div>
      );
   }
}

export default Blog;
