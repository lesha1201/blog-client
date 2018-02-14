import React, { Component } from 'react';
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
            onChange={this.handleChange}
            type="text"
            placeholder="Search..."
         />
      );
   }
}

export default SearchBar;
