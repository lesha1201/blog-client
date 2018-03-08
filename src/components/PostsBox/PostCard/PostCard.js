import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PostCard.css';

import { textToReadableURL } from '../../../utils';

const PostCard = ({ postData }) => {
   postData.img = !postData.img
      ? PostCard.defaultProps.postData.img
      : postData.img;
   return (
      <div className="post-box">
         <Link
            className="post-box__link"
            to={`/blog/${postData.id}/${textToReadableURL(postData.title)}`}
         >
            <div
               className="post-box__img"
               style={{
                  backgroundImage: `url(${postData.img})`
               }}
            />
            <h2 className="post-box__title">{postData.title}</h2>
         </Link>
      </div>
   );
};

PostCard.propTypes = {
   postData: PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string.isRequired
   }).isRequired
};

PostCard.defaultProps = {
   postData: {
      img:
         'http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder2.png'
   }
};

export default PostCard;
