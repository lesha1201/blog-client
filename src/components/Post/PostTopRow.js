import React from 'react';
import PropTypes from 'prop-types';
import PostInfoBlock from './PostInfoBlock';

const PostTopRow = ({ imgUrl, categories, createdAt, author }) => {
   return (
      <div className="post__top-row">
         <div className="post__img">
            <img className="card" src={imgUrl} />
         </div>

         <PostInfoBlock
            categories={categories}
            createdAt={createdAt}
            author={author}
         />
      </div>
   );
};

PostTopRow.propTypes = {
   imgUrl: PropTypes.string.isRequired,
   categories: PropTypes.arrayOf(
      PropTypes.shape({
         value: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired
      })
   ).isRequired,
   createdAt: PropTypes.string.isRequired,
   author: PropTypes.shape({
      fullName: PropTypes.string.isRequired
   }).isRequired
};

export default PostTopRow;
