import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { blogAPI } from '../../api';
import Post from '../../components/Post/Post';
import PostInfo from '../../components/PostInfo/PostInfo';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

class PostPage extends Component {
   state = {
      post: {
         id: '',
         author: { fullName: '' },
         title: '',
         tags: [],
         text: '',
         img: '',
         createdAt: ''
      }
   };

   componentDidMount() {
      blogAPI
         .getPost(this.props.match.params.id)
         .then(post => this.setState({ post }));
   }

   render() {
      const { post } = this.state;
      return (
         <React.Fragment>
            <SectionHeading text="Blog" />
            <div className="flex-sb">
               <Post post={post} />
               <PostInfo author={post.author.fullName} tags={post.tags} />
            </div>
         </React.Fragment>
      );
   }
}

PostPage.propTypes = {
   match: PropTypes.shape({
      params: PropTypes.shape({
         id: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired
      })
   })
};

export default PostPage;
