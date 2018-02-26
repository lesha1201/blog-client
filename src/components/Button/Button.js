import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.scss';

class Button extends React.Component {
   shouldComponentUpdate() {
      return false;
   }

   render() {
      const { text, color, to } = this.props;
      if (to)
         return (
            <Link to={to} className={`btn ${color ? 'btn--' + color : ''}`}>
               {text}
            </Link>
         );
      else
         return (
            <button className={`btn ${color ? 'btn--' + color : ''}`}>
               {text}
            </button>
         );
   }
}

Button.propTypes = {
   text: PropTypes.string.isRequired,
   to: PropTypes.string.isRequired,
   color: PropTypes.string
};

export default Button;
