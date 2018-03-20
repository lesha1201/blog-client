import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './RightBlock.css';

import SearchBar from '../SearchBar/SearchBar';
import PostsBox from '../PostsBox/PostsBox';
import Button from '../Button/Button';

class RightBlock extends Component {
   state = {
      filter: this.props.filter
   };

   componentWillReceiveProps(nextProps) {
      this.setState({ filter: nextProps.filter });
   }

   getSearchFilter = e => {
      e.persist();
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
         this.setState({
            filter: { ...this.state.filter, title: e.target.value }
         });
      }, 700);
   };

   render() {
      const { isModerator } = this.props;
      console.log(this.props.filter);
      console.log(this.state.filter);
      return (
         <div className="rightblock">
            <SearchBar input={this.getSearchFilter} />
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
   isModerator: false,
   filter: {
      title: '',
      tags: []
   }
};

RightBlock.propTypes = {
   isModerator: PropTypes.bool,
   location: PropTypes.shape({
      search: PropTypes.string
   }),
   filter: PropTypes.shape({
      title: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string)
   })
};

const mapStateToProps = ({ user }) => ({
   isModerator: user.role === 'moderator' || user.role === 'admin'
});

export default connect(mapStateToProps)(RightBlock);
