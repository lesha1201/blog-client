import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.scss';

import Button from '../Button/Button';

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
      <div className="navbar__right">
         <Button color="blue" text="Sign In" to="/signin" />
         <Button color="green" text="Sign Up" to="/signup" />
      </div>
   </nav>
);

export default TopNav;
