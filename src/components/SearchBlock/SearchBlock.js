import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBlock.scss';

class SearchBlock extends Component {
   state = {
      text: ''
   };

   handleChange = e => {
      this.setState({
         text: e.target.value
      });
   };

   render() {
      return (
         <div className="search-block">
            <i className="search-block__icon icon ion-ios-search-strong" />
            <input
               className="search-block__input"
               type="text"
               name="search"
               id="search"
               placeholder="Search..."
               onChange={
                  this.props.onChange ? this.props.onChange : this.handleChange
               }
            />
         </div>
      );
   }
}

SearchBlock.propTypes = {
   onChange: PropTypes.func
};

export default SearchBlock;
