import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './PostsBox.css';

import Post from './Post/Post';
import { fetchPosts } from '../../actions/blog';

class PostsBox extends Component {
   componentDidMount() {
      this.props.fetchPosts();
   }

   renderPosts = () => {
      const { posts } = this.props;
      return posts.map(post => <Post key={post.id} postData={post} />);
   };

   render() {
      return <div className="posts-box">{this.renderPosts()}</div>;
   }
}

PostsBox.propTypes = {
   fetchPosts: PropTypes.func.isRequired,
   posts: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         img: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired
      })
   )
};

PostsBox.defaultProps = {
   posts: []
};

function mapStateToProps(state) {
   return {
      posts: state.blog.posts
   };
}

export default connect(mapStateToProps, { fetchPosts })(PostsBox);
