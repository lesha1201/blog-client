import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Post.scss';

import PostTopRow from './PostTopRow';
import CommentsBlock from '../CommentsBlock/CommentsBlock';
import Button from '../Button/Button';

const Post = ({ post, comments, onComment, isModerator }) => {
   return (
      <div className="post">
         <h1 className="post__title">{post.title}</h1>
         {isModerator && (
            <Button to={`/blog/edit/${post.id}`} color="green">
               Edit
            </Button>
         )}

         <PostTopRow
            imgUrl={post.img}
            categories={post.categories}
            createdAt={post.createdAt}
            author={post.author}
         />

         <div className="card post__content">{post.text}</div>

         <CommentsBlock comments={comments} onSubmit={onComment} />
      </div>
   );
};

Post.propTypes = {
   post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(
         PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
         })
      ).isRequired,
      author: PropTypes.shape({
         fullName: PropTypes.string.isRequired
      }).isRequired
   }).isRequired,
   comments: PropTypes.array.isRequired,
   onComment: PropTypes.func.isRequired,
   isModerator: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
   const role = state.user.role;
   return {
      isModerator: role === 'moderator' || role === 'admin'
   };
}

export default connect(mapStateToProps)(Post);
