import React from 'react';
import PropTypes from 'prop-types';
import './PostInfo.scss';

const PostInfo = ({ author }) => {
   return (
      <div className="post-info">
         <div className="post-info__author">
            <img
               className="round-avatar post-info__author__avatar"
               src="https://cdnb.artstation.com/p/users/avatars/000/004/897/medium/ff93475c980118fe20f4855c17d9888b.jpg?1425522864"
            />
            <a className="post-info__author__name" href="#">
               {author}
            </a>
         </div>
      </div>
   );
};

PostInfo.propTypes = {
   author: PropTypes.string.isRequired,
   tags: PropTypes.arrayOf(PropTypes.string)
};

export default PostInfo;
