import React from 'react';
import PropTypes from 'prop-types';
import './ErrorCard.scss';

class ErrorCard extends React.Component {
   state = {
      showError: true
   };

   render() {
      const { message, className } = this.props;
      const { showError } = this.state;
      return (
         <React.Fragment>
            {showError ? (
               <div className={`error-card ${className}`}>
                  <span>{message}</span>
                  {/* <span className="error-card__close" onClick={this.onClose}>
                     X
                  </span> */}
               </div>
            ) : (
               <div />
            )}
         </React.Fragment>
      );
   }

   onClose = () => {
      this.setState({ showError: false });
   };
}

ErrorCard.defaultProps = {
   className: ''
};

ErrorCard.propTypes = {
   message: PropTypes.string.isRequired,
   className: PropTypes.string
};

export default ErrorCard;
