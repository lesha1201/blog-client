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
      <article className="card post-card">
         <Link
            to={`/blog/${postData.id}/${textToReadableURL(postData.title)}`}
            className="post-card__img-link"
            style={{
               backgroundImage: `url(${postData.img})`
            }}
         />
         <div className="post-card__info">
            <div className="post-card__head">
               <Link
                  to={`/blog/${postData.id}/${textToReadableURL(
                     postData.title
                  )}`}
                  className="post-card__link"
               >
                  <h2 className="post-card__title">{postData.title}</h2>
               </Link>
               <div className="post-card__date">09 april 2018</div>
            </div>
            <div className="post-card__desc">
               {postData.text.length > 283 ? postData.text.slice(0, 283) + '...' : postData.text}
            </div>
         </div>
      </article>
   );
};

PostCard.propTypes = {
   postData: PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
   }).isRequired
};

PostCard.defaultProps = {
   postData: {
      img:
         'http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder2.png'
   }
};

export default PostCard;
