import React from 'react';
import PropTypes from 'prop-types';
import './TagsBox.css';

import TagsList from './TagsList.js';

const TagsBox = ({ tags }) => (
   <div className="tags-box">
      <h2 className="tags-box__heading">Tags</h2>
      <TagsList tags={tags} />
   </div>
);

TagsBox.propTypes = {
   tags: PropTypes.arrayOf(
      PropTypes.shape({
         tagname: PropTypes.string.isRequired,
         quantity: PropTypes.number.isRequired,
         color: PropTypes.string.isRequired
      })
   ).isRequired
};

export default TagsBox;
