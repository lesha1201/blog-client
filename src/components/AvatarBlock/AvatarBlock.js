import React from 'react';
import PropTypes from 'prop-types';
import './AvatarBlock.scss';

const AvatarBlock = ({ color, src, name, className, href }) => {
   return (
      <div className={`avatar-block ${className}`}>
         <img className="avatar-block__img" alt="Avatar" src={src} />
         <a href={href} className="avatar-block__name" style={{ color }}>
            {name}
         </a>
      </div>
   );
};

AvatarBlock.defaultProps = {
   color: '#232426',
   src: '',
   href: '#',
   className: ''
};

AvatarBlock.propTypes = {
   name: PropTypes.string.isRequired,
   href: PropTypes.string,
   color: PropTypes.string,
   src: PropTypes.string,
   className: PropTypes.string
};

export default AvatarBlock;
