import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './PostsBox.css';

import PostCard from './PostCard/PostCard';
import { fetchPosts } from '../../actions/blog';

class PostsBox extends Component {
   componentDidMount() {
      this.props.fetchPosts();
   }

   renderPosts = () => {
      const { posts, filter } = this.props;
      return posts
         .filter(post =>
            post.title.toLowerCase().includes(filter.toLowerCase())
         )
         .map(post => <PostCard key={post.id} postData={post} />);
   };

   render() {
      const postsLength = this.renderPosts().length;
      return (
         <div className="posts-box">
            {postsLength > 0 ? this.renderPosts() : <div>Can&apos;t find</div>}
         </div>
      );
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
   ),
   filter: PropTypes.string
};

PostsBox.defaultProps = {
   posts: [],
   filter: ''
};

function mapStateToProps(state) {
   return {
      posts: state.blog.posts
   };
}

export default connect(mapStateToProps, { fetchPosts })(PostsBox);
