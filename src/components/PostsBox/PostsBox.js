import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './PostsBox.css';

import PostCard from './PostCard/PostCard';
import { blogAPI } from '../../api';
import { POST_PER_PAGE } from '../../constants';
import Button from '../Button/Button';
import { parseQueryString } from '../../utils';

class PostsBox extends Component {
   state = {
      posts: {
         articles: [],
         count: 0
      },
      page: parseInt(parseQueryString(this.props.location.search).page) || 1
   };

   componentDidMount() {
      this.fetchPosts();
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.filter !== this.props.filter) {
         this.fetchPosts(nextProps.filter);
      }
      if (nextProps.location.search !== this.props.location.search) {
         const page =
            parseInt(parseQueryString(nextProps.location.search).page) || 1;
         window.scroll({
            top: 0,
            behavior: 'smooth'
         });
         this.fetchPosts('', page);
         this.setState({ page });
      }
   }

   fetchPosts = (filter = this.props.filter, page = this.state.page) => {
      const skip = filter ? 0 : POST_PER_PAGE * (page - 1);

      blogAPI.getPosts(filter, skip, POST_PER_PAGE).then(posts => {
         this.setState({ posts });
      });
   };

   renderPosts = () => {
      const { filter } = this.props;
      const { articles } = this.state.posts;

      return articles
         .filter(article =>
            article.title.toLowerCase().includes(filter.toLowerCase())
         )
         .map(article => <PostCard key={article.id} postData={article} />);
   };

   render() {
      const postsNodes = this.renderPosts();
      const { count } = this.state.posts;
      const { page } = this.state;

      return (
         <React.Fragment>
            <div className="posts-box">
               {postsNodes.length > 0 ? postsNodes : <div>Can&apos;t find</div>}
            </div>
            <div className="pagination">
               {page > 1 ? (
                  <Button text="prev" to={`/blog?page=${page - 1}`} />
               ) : (
                  <Button text="prev" disabled />
               )}
               {POST_PER_PAGE * page < count ? (
                  <Button text="next" to={`/blog?page=${page + 1}`} />
               ) : (
                  <Button text="next" disabled />
               )}
            </div>
         </React.Fragment>
      );
   }
}

PostsBox.propTypes = {
   filter: PropTypes.string,
   location: PropTypes.shape({
      search: PropTypes.string
   })
};

PostsBox.defaultProps = {
   filter: ''
};

export default withRouter(PostsBox);
