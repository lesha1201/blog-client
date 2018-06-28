import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Blog.css';

import { setFilter } from '../../actions/blog';
import Button from '../../components/Button/Button';
import SearchBlock from '../../components/SearchBlock/SearchBlock';
import PostsBlock from '../../components/PostsBlock/PostsBlock';

class Blog extends Component {
   onSearch = e => {
      e.persist();
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
         this.props.setFilter({ ...this.props.filter, title: e.target.value });
      }, 500);
   };

   render() {
      const { role } = this.props;
      return (
         <div className="blog-section">
            <div className="blog-section__head">
               {(role === 'moderator' || role === 'admin') && (
                  <Button to="/blog/add" color="green" className="add-btn">
                     Add
                  </Button>
               )}
               <Button className="menu-btn">
                  <i className="icon ion-navicon-round" />
               </Button>
               <SearchBlock onChange={this.onSearch} />
               <Button className="filter-btn">
                  <i className="icon ion-funnel" />
               </Button>
            </div>
            <PostsBlock filter={this.props.filter} />
         </div>
      );
   }
}

Blog.propTypes = {
   setFilter: PropTypes.func.isRequired,
   filter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(
         PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
         })
      ),
      sortby: PropTypes.string.isRequired
   }),
   role: PropTypes.string,
   location: PropTypes.shape({
      search: PropTypes.string
   })
};

function mapStateToProps(state) {
   return {
      filter: state.blog.filter,
      role: state.user.role
   };
}

export default connect(mapStateToProps, { setFilter })(Blog);
