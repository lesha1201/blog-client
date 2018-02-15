import React from 'react';
import { Link } from 'react-router-dom';

import './TopNav.css';

const TopNav = () => (
   <nav className="navbar">
      <Link to="/">
         <img className="navbar__logo" src="../../../public/img/twitter.svg" />
      </Link>
      <ul className="nav">
         <li className="nav__item">
            <Link className="nav__link" to="/blog">
               Blog
            </Link>
         </li>
         <li className="nav__item">
            <Link className="nav__link" to="/blog">
               Blog
            </Link>
         </li>
         <li className="nav__item">
            <Link className="nav__link" to="/blog">
               Blog
            </Link>
         </li>
      </ul>
   </nav>
);

export default TopNav;
