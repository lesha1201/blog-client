import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { blogAPI } from '../../api';
import Post from '../../components/Post/Post';
import Loader from '../../components/Loader/Loader';

class PostPage extends Component {
   state = {
      post: undefined,
      comments: [],
      loading: true
   };

   componentDidMount() {
      this.setState({ loading: true });
      blogAPI.getPost(this.props.match.params.id).then(post => {
         this.setState({
            post,
            comments: post && post.comments,
            loading: false
         });
      });
   }

   onComment = commentText => {
      blogAPI
         .addCommentToPost(this.props.match.params.id, commentText)
         .then(comment =>
            this.setState(prevState => ({
               comments: [...prevState.comments, comment]
            }))
         );
   };

   render() {
      const { post, comments, loading } = this.state;
      return (
         <React.Fragment>
            {post ? (
               <Post
                  post={post}
                  comments={comments}
                  onComment={this.onComment}
               />
            ) : loading ? (
               <Loader />
            ) : (
               <div>Can&apos;t load the post. Something went wrong :(</div>
            )}
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
