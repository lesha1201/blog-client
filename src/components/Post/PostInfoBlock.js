import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
import AvatarBlock from '../AvatarBlock/AvatarBlock';

const PostInfoBlock = ({ author, createdAt, categories, commentsCount }) => {
   function renderCategories() {
      return categories.map(category => (
         <Tag
            key={category.value}
            className="post__tag"
            bgColor={category.bgColor}
            textColor={category.textColor}
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
               <ion-icon name="calendar" />
               {new Date(createdAt).toLocaleDateString()}
            </div>
            <div className="post__meta-comments">
               <ion-icon name="text" />
               {commentsCount}
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
   }).isRequired,
   commentsCount: PropTypes.number.isRequired
};

export default PostInfoBlock;
