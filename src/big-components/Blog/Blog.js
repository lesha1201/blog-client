import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Blog.css';

import TagsBox from '../../components/TagsBox/TagsBox';
import RightBlock from '../../components/RightBlock/RightBlock';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { blogAPI } from '../../api';

class Blog extends Component {
   state = {
      tags: [],
      filter: {
         title: '',
         tags: []
      }
   };

   componentDidMount() {
      blogAPI.getAllTags().then(tags => this.setState({ tags }));
   }

   addFilterTags = tags => {
      this.setState({ filter: { ...this.state.filter, tags } });
   };

   render() {
      return (
         <React.Fragment>
            <SectionHeading text="Blog" />
            <div className="flex-sb">
               <TagsBox
                  sendFilterTags={this.addFilterTags}
                  tags={this.state.tags}
               />
               <RightBlock
                  filter={this.state.filter}
                  location={this.props.location}
               />
            </div>
         </React.Fragment>
      );
   }
}

Blog.propTypes = {
   location: PropTypes.shape({
      search: PropTypes.string
   })
};

export default Blog;
