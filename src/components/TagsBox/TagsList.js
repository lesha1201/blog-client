import React from 'react';
import PropTypes from 'prop-types';

class TagsList extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         activeTags: []
      };
   }

   handleClick = tag => {
      this.setState(({ activeTags }) => {
         const tags = activeTags.concat();
         const inxOfTag = tags.indexOf(tag);
         tags[inxOfTag] ? tags.splice(inxOfTag, 1) : tags.push(tag);
         this.props.sendFilterTags(tags);
         return {
            activeTags: tags
         };
      });
   };

   render() {
      const { tags } = this.props;
      const { activeTags } = this.state;

      return (
         <ul className="tags-list">
            {tags.map(tag => (
               <li
                  className={`tag ${activeTags.includes(tag.tagname) &&
                     'tag--active'}`}
                  key={tag.tagname + tag.quantity}
                  onClick={this.handleClick.bind(this, tag.tagname)}
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
   ).isRequired,
   sendFilterTags: PropTypes.func.isRequired
};

export default TagsList;
