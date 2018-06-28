import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Form';

class FormTextarea extends Component {
   state = {
      value: '',
      styles: {
         overflowY: 'hidden'
      }
   };

   textarea = React.createRef();

   componentDidMount() {
      this.textarea.current.addEventListener('input', this.resize);
   }

   componentWillUnmount() {
      this.textarea.current.removeEventListener('input', this.resize);
   }

   resize() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
   }

   render() {
      const { dataName, name, id, className, error, ...rest } = this.props;

      return (
         <FormContext.Consumer>
            {onChange => (
               <div className="textarea-block">
                  <textarea
                     ref={this.textarea}
                     {...rest}
                     className={`textarea-block__textarea ${
                        error ? 'textarea-block__textarea--error' : ''
                     } ${className || ''}`}
                     name={name}
                     id={id}
                     onChange={e => onChange(e, dataName)}
                     style={this.state.styles}
                  />
               </div>
            )}
         </FormContext.Consumer>
      );
   }
}

FormTextarea.propTypes = {
   dataName: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   className: PropTypes.string,
   error: PropTypes.string
};

export default FormTextarea;
