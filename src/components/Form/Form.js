import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

import FormGroup from './FormGroup';
import FormField from './FormField';
import FormLabel from './FormLabel';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextarea from './FormTextarea';
import ErrorCard from '../ErrorCard/ErrorCard';
import { checkFormForErrors } from '../../utils';

export const FormContext = React.createContext({ onChange: () => {} });

class Form extends Component {
   state = {
      formData: {}
   };

   static Group = FormGroup;
   static Field = FormField;
   static Label = FormLabel;
   static Input = FormInput;
   static Select = FormSelect;
   static Textarea = FormTextarea;

   static getDerivedStateFromProps(nextProps, prevState) {
      return {
         ...prevState,
         formData: nextProps.initState
      };
   }

   onChange = (e, dataName) => {
      if (typeof e == 'string') {
         // if e is string then it's dataName and dataName is newValue (for react-select element)
         this.setState(prevState => {
            const newForm = {
               ...prevState.formData,
               [e]: dataName
            };
            this.props.onChange && this.props.onChange(newForm);
            return {
               formData: newForm
            };
         });
      } else {
         // e = event
         e.persist();

         this.setState(prevState => {
            const newForm = {
               ...prevState.formData,
               [dataName]: e.target.value
            };
            this.props.onChange && this.props.onChange(newForm);
            return {
               formData: newForm
            };
         });
      }
   };

   onSubmit = e => {
      e.preventDefault();
      typeof this.props.onSubmit == 'function' && this.props.onSubmit();
   };

   onInvalid = e => {
      e.preventDefault();
      const errs = checkFormForErrors(this.state.formData);
      this.props.onSubmit(errs);
   };

   render() {
      const { error } = this.props;
      return (
         <React.Fragment>
            <FormContext.Provider value={this.onChange}>
               <form
                  onSubmit={this.onSubmit}
                  onInvalid={this.onInvalid}
                  className={this.props.className}
               >
                  {error.length > 0 && (
                     <ErrorCard className="form-error" message={error} />
                  )}
                  {this.props.children}
               </form>
            </FormContext.Provider>
         </React.Fragment>
      );
   }
}

Form.defaultProps = {
   initState: {},
   className: '',
   error: ''
};

Form.propTypes = {
   initState: PropTypes.objectOf(PropTypes.any).isRequired,
   children: PropTypes.node,
   onSubmit: PropTypes.func,
   onChange: PropTypes.func,
   className: PropTypes.string,
   error: PropTypes.string
};

export default Form;
