import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SRComments from 'simple-react-comments';
import { connect } from 'react-redux';

class CommentsBlock extends Component {
   static propTypes = {
      comments: PropTypes.array.isRequired,
      onSubmit: PropTypes.func.isRequired,
      isAuth: PropTypes.bool.isRequired
   };

   state = {
      comments: []
   };

   static getDerivedStateFromProps(props) {
      let fitComments = [];
      const { comments } = props;

      for (let i = 0; i < comments.length; i++) {
         let comment = {
            avatarUrl: comments[i].author.avatar,
            authorUrl: '/user/' + comments[i].author.id,
            fullName: comments[i].author.fullName,
            createdAt: new Date(comments[i].createdAt),
            text: comments[i].text
         };
         fitComments.push(comment);
      }

      return {
         comments: fitComments
      };
   }

   render() {
      return (
         <div className="comments-block">
            <div className="comments-block__heading">Comments</div>
            <div className="card comments-block__card">
               <SRComments
                  comments={this.state.comments}
                  reactRouter
                  onSubmit={this.props.onSubmit}
                  isLoggedIn={this.props.isAuth}
                  signinUrl="/signin"
               />
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      isAuth: !!state.user.token
   };
}

export default connect(mapStateToProps)(CommentsBlock);
