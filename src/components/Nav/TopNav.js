import React from 'react';

import './TopNav.css';

const TopNav = () => (
   <nav className="navbar">
      <a href="/">
         <img className="navbar__logo" src="../../../public/img/twitter.svg" />
      </a>
      <ul className="nav">
         <li className="nav__item">
            <a className="nav__link" href="#">
               Blog
            </a>
         </li>
         <li className="nav__item">
            <a className="nav__link" href="#">
               Blog
            </a>
         </li>
         <li className="nav__item">
            <a className="nav__link" href="#">
               Blog
            </a>
         </li>
      </ul>
   </nav>
);

export default TopNav;
