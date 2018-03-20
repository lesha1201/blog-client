import React from 'react';
import PropTypes from 'prop-types';
import './TagsBox.css';

import TagsList from './TagsList.js';

class TagsBox extends React.Component {
   shouldComponentUpdate(nextProps) {
      const jsonNextTags = JSON.stringify(nextProps.tags);
      const jsonTags = JSON.stringify(this.props.tags);

      return jsonTags !== jsonNextTags ? true : false;
   }

   render() {
      return (
         <div className="tags-box">
            <h2 className="tags-box__heading">Tags</h2>
            <TagsList
               sendFilterTags={this.props.sendFilterTags}
               tags={this.props.tags}
            />
         </div>
      );
   }
}

TagsBox.propTypes = {
   tags: PropTypes.arrayOf(
      PropTypes.shape({
         tagname: PropTypes.string.isRequired,
         quantity: PropTypes.number.isRequired,
         color: PropTypes.string.isRequired
      })
   ).isRequired,
   sendFilterTags: PropTypes.func.isRequired
};

export default TagsBox;
