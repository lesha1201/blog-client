import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './RightBlock.css';

import SearchBar from '../SearchBar/SearchBar';
import PostsBox from '../PostsBox/PostsBox';
import Button from '../Button/Button';

class RightBlock extends Component {
   state = {
      filter: ''
   };

   getFilter = e => {
      e.persist();
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
         this.setState({ filter: e.target.value });
      }, 700);
   };

   render() {
      const { isModerator } = this.props;
      return (
         <div className="rightblock">
            <SearchBar input={this.getFilter} />
            {isModerator && <Button text="Add" color="green" to="/create" />}
            <PostsBox
               filter={this.state.filter}
               location={this.props.location}
            />
         </div>
      );
   }
}

RightBlock.defaultProps = {
   isModerator: false
};

RightBlock.propTypes = {
   isModerator: PropTypes.bool,
   location: PropTypes.shape({
      search: PropTypes.string
   })
};

const mapStateToProps = ({ user }) => ({
   isModerator: user.role === 'moderator' || user.role === 'admin'
});

export default connect(mapStateToProps)(RightBlock);
