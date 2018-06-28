import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.scss';

class Button extends React.Component {
   buildClassName(modifiers, className) {
      let newClassName = 'btn ';
      modifiers.forEach(
         modifier => modifier && (newClassName += `btn--${modifier} `)
      );
      if (className) newClassName += className;
      return newClassName;
   }

   render() {
      const {
         children,
         color,
         to,
         type,
         size,
         className,
         ...props
      } = this.props;
      let newClassName = this.buildClassName([color, size, type], className);

      if (to)
         return (
            <Link to={to} className={newClassName} {...props}>
               {children}
            </Link>
         );
      else
         return (
            <button className={newClassName} {...props}>
               {children}
            </button>
         );
   }
}

Button.propTypes = {
   children: PropTypes.node.isRequired,
   to: PropTypes.string,
   color: PropTypes.oneOf(['green', 'red', 'blue', 'clear']),
   type: PropTypes.string,
   size: PropTypes.oneOf(['wide']),
   className: PropTypes.string
};

export default Button;
