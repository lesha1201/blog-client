import React, { Component } from 'react';
import './Blog.css';

import TagsBox from '../../components/TagsBox/TagsBox';
import RightBlock from '../../components/RightBlock/RightBlock';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { apolloFetch } from '../../utils';

class Blog extends Component {
   state = {
      tags: []
   };

   componentDidMount() {
      const query = `{ 
         allTags {
            tagname
            quantity
            color
         }
      }`;

      apolloFetch({ query }).then(res =>
         this.setState({ tags: res.data.allTags })
      );
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
