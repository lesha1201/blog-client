import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
import AvatarBlock from '../AvatarBlock/AvatarBlock';

const PostInfoBlock = ({ author, createdAt, categories }) => {
   function renderCategories() {
      return categories.map(category => (
         <Tag
            key={category.value}
            className="post__tag"
            bgColor="#FCE759"
            textColor="#232426"
         >
            {category.label}
         </Tag>
      ));
   }

   return (
      <div className="card post__info-block">
         <AvatarBlock
            className="post__avatar"
            name={author.fullName}
            src={author.avatar}
            href="#"
         />

         <div className="post__metadata">
            <div className="post__meta-date">
               <i className="icon ion-md-calendar" />
               {new Date(createdAt).toLocaleDateString()}
            </div>

            <div className="post__meta-views">
               <i className="icon ion-md-eye" />824
            </div>
            <div className="post__meta-comments">
               <i className="icon ion-md-text" />2
            </div>
         </div>

         <div className="post__categories">{renderCategories()}</div>
      </div>
   );
};

PostInfoBlock.propTypes = {
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

export default PostInfoBlock;
