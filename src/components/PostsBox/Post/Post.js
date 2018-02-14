import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({ postData }) => {
   postData.img = !postData.img ? Post.defaultProps.postData.img : postData.img;
   return (
      <div className="post-box">
         <a className="post-box__link" href={postData.link}>
            <div
               className="post-box__img"
               style={{
                  backgroundImage: `url(${postData.img})`
               }}
            />
            <h2 className="post-box__title">{postData.title}</h2>
         </a>
      </div>
   );
};

Post.propTypes = {
   postData: PropTypes.shape({
      link: PropTypes.string.isRequired,
      img: PropTypes.string,
      title: PropTypes.string.isRequired
   }).isRequired
};

Post.defaultProps = {
   postData: {
      img:
         'http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder2.png'
   }
};

export default Post;
