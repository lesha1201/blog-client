import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './PostsBlock.css';

import PostCard from './PostCard/PostCard';
import { blogAPI } from '../../api';
import { POST_PER_PAGE } from '../../constants';
import Button from '../Button/Button';
import { parseQueryString } from '../../utils';
import Pagination from '../Pagination/Pagination';

class PostsBlock extends Component {
   state = {
      posts: {
         articles: [],
         count: 0
      },
      page: parseInt(parseQueryString(this.props.location.search).page) || 1,
      loading: true
   };

   componentDidMount() {
      this.fetchPosts();
   }

   componentDidUpdate(prevProps, prevState) {
      if (
         JSON.stringify(prevProps.filter) !== JSON.stringify(this.props.filter)
      ) {
         if (prevState.page !== this.state.page) {
            this.props.history.push(`/blog?page=${this.state.page}`);
         } else {
            this.fetchNewPage(null, this.props.filter);
         }
      }
      if (prevProps.location.search !== this.props.location.search) {
         this.fetchNewPage(this.props.location.search);
      }
   }

   fetchNewPage = (query, filter = this.props.filter) => {
      const page = parseInt(parseQueryString(query).page) || 1;
      const mainBlock = document.querySelector('.main-content');
      mainBlock.scroll({
         top: 0,
         behavior: 'smooth'
      });
      this.fetchPosts(filter, page);
      this.setState({ page });
   };

   fetchPosts = (filter = this.props.filter, page = this.state.page) => {
      const skip = POST_PER_PAGE * (page - 1);
      this.setState({
         loading: true
      });

      blogAPI.getPosts(filter, skip, POST_PER_PAGE).then(posts => {
         this.setState({ posts, loading: false });
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
      const { page, loading } = this.state;

      return (
         <React.Fragment>
            <div className="posts-block">
               {loading ? (
                  <div>Loading...</div>
               ) : postsNodes.length > 0 ? (
                  postsNodes
               ) : (
                  <div>Can&apos;t find</div>
               )}
            </div>
            <Pagination className="posts-block__pagination">
               {page > 1 ? (
                  <Button to={`/blog?page=${page - 1}`} color="blue">
                     prev
                  </Button>
               ) : (
                  <Button disabled>prev</Button>
               )}
               {POST_PER_PAGE * page < count ? (
                  <Button to={`/blog?page=${page + 1}`} color="blue">
                     next
                  </Button>
               ) : (
                  <Button disabled>next</Button>
               )}
            </Pagination>
         </React.Fragment>
      );
   }
}

PostsBlock.propTypes = {
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
   location: PropTypes.shape({
      search: PropTypes.string
   }),
   history: PropTypes.shape({
      push: PropTypes.func.isRequired
   })
};

PostsBlock.defaultProps = {
   filter: {
      title: '',
      categories: []
   }
};

export default withRouter(PostsBlock);
