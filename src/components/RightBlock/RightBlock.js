import React from 'react';
import './RightBlock.css';

import SearchBar from '../SearchBar/SearchBar';
import PostsBox from '../PostsBox/PostsBox';

const RightBlock = () => {
   return (
      <div className="rightblock">
         <SearchBar />
         <PostsBox />
      </div>
   );
};

export default RightBlock;
