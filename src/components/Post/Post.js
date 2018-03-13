import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Post.scss';

import Button from '../Button/Button';

const Post = ({ post, isModerator }) => {
   const postDate = new Date(post.createdAt).toLocaleDateString();
   return (
      <div className="post-block">
         {isModerator &&
            post.id && (
               <Button color="blue" text="Edit" to={`/blog/edit/${post.id}`} />
            )}
         <div className="post-block__head">
            <h1 className="post-block__title">{post.title}</h1>
            <div className="post-block__date">{postDate}</div>
         </div>
         <img className="post-block__image" src={post.img} />
         <p>{post.text}</p>
      </div>
   );
};

Post.propTypes = {
   post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired
   }).isRequired,
   isModerator: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
   const role = state.user.role;
   return {
      isModerator: role === 'moderator' || role === 'admin'
   };
}

export default connect(mapStateToProps)(Post);
