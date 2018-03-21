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
      if (
         JSON.stringify(nextProps.filter) !== JSON.stringify(this.props.filter)
      ) {
         if (this.state.page > 1) this.props.history.push('/blog?page=1');
         else this.fetchNewPage(null, nextProps.filter);
      }
      if (nextProps.location.search !== this.props.location.search) {
         this.fetchNewPage(nextProps.location.search);
      }
   }

   fetchNewPage = (query, filter = this.props.filter) => {
      const page = parseInt(parseQueryString(query).page) || 1;
      window.scroll({
         top: 0,
         behavior: 'smooth'
      });
      this.fetchPosts(filter, page);
      this.setState({ page });
   };

   fetchPosts = (filter = this.props.filter, page = this.state.page) => {
      const skip = POST_PER_PAGE * (page - 1);

      blogAPI.getPosts(filter, skip, POST_PER_PAGE).then(posts => {
         this.setState({ posts });
      });
   };

   renderPosts = () => {
      const { filter } = this.props;
      const { articles } = this.state.posts;

      return articles
         .filter(article =>
            article.title.toLowerCase().includes(filter.title.toLowerCase())
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
   filter: PropTypes.shape({
      title: '',
      tags: PropTypes.arrayOf(PropTypes.string)
   }),
   location: PropTypes.shape({
      search: PropTypes.string
   }),
   history: PropTypes.shape({
      push: PropTypes.func.isRequired
   })
};

PostsBox.defaultProps = {
   filter: {
      title: '',
      tags: []
   }
};

export default withRouter(PostsBox);
