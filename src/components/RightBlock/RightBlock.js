import React from 'react';
import './RightBlock.css';

import SearchBar from '../SearchBar/SearchBar';
import PostsBox from '../PostsBox/PostsBox';
import Button from '../Button/Button';

const RightBlock = () => {
   return (
      <div className="rightblock">
         <SearchBar />
         <Button text="Add" color="green" to="/create" />
         <PostsBox />
      </div>
   );
};

export default RightBlock;
