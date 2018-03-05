import React from 'react';
import './NotFound.scss';

const NotFound = () => {
   return (
      <div className="not-found">
         <div className="not-found__code">404</div>
         <div className="not-found__description">Page not found</div>
      </div>
   );
};

export default NotFound;
