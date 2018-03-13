import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
   constructor(props) {
      super(props);

      this.state = {
         text: ''
      };
   }

   handleChange = e => {
      this.setState({
         text: e.target.value
      });
   };

   render() {
      return (
         <input
            className="searchbar"
            onChange={this.props.input ? this.props.input : this.handleChange}
            type="text"
            placeholder="Search..."
         />
      );
   }
}

SearchBar.propTypes = {
   input: PropTypes.func
};

export default SearchBar;
