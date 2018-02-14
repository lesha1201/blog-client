import React from 'react';
import PropTypes from 'prop-types';

class TagsList extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         activeTag: ''
      };
   }

   handleClick = tag => {
      this.setState({
         activeTag: tag
      });
   };

   render() {
      const { tags } = this.props;
      const { activeTag } = this.state;

      return (
         <ul className="tags-list">
            {tags.map(tag => (
               <li
                  className={`tag ${activeTag === tag && 'tag--active'}`}
                  key={tag.tagname + tag.quantity}
                  onClick={this.handleClick.bind(this, tag)}
               >
                  <div
                     className="tag__color"
                     style={{ background: tag.color }}
                  />
                  <span className="tag__name">{tag.tagname}</span>
                  <span className="tag__quantity">{tag.quantity}</span>
               </li>
            ))}
         </ul>
      );
   }
}

TagsList.propTypes = {
   tags: PropTypes.arrayOf(
      PropTypes.shape({
         tagname: PropTypes.string.isRequired,
         quantity: PropTypes.number.isRequired,
         color: PropTypes.string.isRequired
      })
   ).isRequired
};

export default TagsList;
