import React, { Component } from 'react';
import './PostsBox.css';

import Post from './Post/Post';

const postsData = [
   {
      link: '#',
      title: 'Some title1'
   },
   {
      link: '#',
      img: 'http://www.gsfdcy.com/data/img/33/1499868-forest-wallpaper.jpg',
      title: 'Some title2'
   },
   {
      link: '#',
      img:
         'http://wallpaper-gallery.net/images/forest-hd-wallpapers/forest-hd-wallpapers-23.jpg',
      title: 'Some title3'
   }
];

class PostsBox extends Component {
   render() {
      return (
         <div className="posts-box">
            <Post postData={postsData[0]} />
            <Post postData={postsData[1]} />
            <Post postData={postsData[2]} />
            <Post postData={postsData[2]} />
            <Post postData={postsData[2]} />
         </div>
      );
   }
}

export default PostsBox;
