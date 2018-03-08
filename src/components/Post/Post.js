import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

const Post = ({ post }) => {
   return (
      <div className="post-block">
         <h1 className="post-block__heading">{post.title}</h1>
         <img className="post-block__image" src={post.img} />
         <p>{post.text}</p>
      </div>
   );
};

Post.propTypes = {
   post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
   }).isRequired
};

export default Post;
