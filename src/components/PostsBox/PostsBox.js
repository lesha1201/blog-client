import React, { Component } from 'react';
import './PostsBox.css';

import Post from './Post/Post';
import { apolloFetch } from '../../utils';

const query = `{ 
   feed {
      id
      img
      title
   }
}`;

class PostsBox extends Component {
   state = {
      posts: []
   };

   componentDidMount() {
      apolloFetch({
         query
      }).then(res => {
         this.setState({ posts: res.data.feed });
      });
   }

   renderPosts = () => {
      const { posts } = this.state;
      return posts.map(post => <Post key={post.id} postData={post} />);
   };

   render() {
      return <div className="posts-box">{this.renderPosts()}</div>;
   }
}

export default PostsBox;
