import React from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';

class FormInput extends React.Component {
   state = {
      showPass: false
   };

   onShowPass = () => {
      this.setState(state => ({
         showPass: !state.showPass
      }));
   };

   render() {
      const {
         className,
         name,
         id,
         icon,
         error,
         dataName,
         type,
         ...rest
      } = this.props;
      return (
         <FormContext.Consumer>
            {onChange => (
               <div className="input-block">
                  <span className="input-block__icon">
                     <ion-icon name={icon} />
                  </span>
                  <input
                     {...rest}
                     type={this.state.showPass ? 'text' : type}
                     className={`input-block__input ${
                        error ? 'textarea-block__textarea--error' : ''
                     } ${className || ''}`}
                     name={name}
                     id={id}
                     style={icon && { paddingLeft: '45px' }}
                     onChange={e => onChange(e, dataName)}
                  />
                  {type === 'password' && (
                     <span
                        className="input-block__show-pass"
                        onClick={this.onShowPass}
                     >
                        <ion-icon
                           name={this.state.showPass ? 'eye-off' : 'eye'}
                        />
                     </span>
                  )}
               </div>
            )}
         </FormContext.Consumer>
      );
   }
}

FormInput.propTypes = {
   dataName: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   className: PropTypes.string,
   icon: PropTypes.string,
   error: PropTypes.string
};

export default FormInput;
