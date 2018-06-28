import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormContext } from './Form';

const FormSelect = ({ dataName, error, ...rest }) => {
   const customStyles = {
      container: base => ({
         ...base
      }),
      control: (base, state) => ({
         ...base,
         background: '#fff',
         border: state.isFocused
            ? '1px solid #4096e0'
            : !error
               ? '1px solid #a4b8c9'
               : '1px solid red',
         boxShadow: 'none',
         borderRadius: '10px',
         padding: '6px 7px',
         ':hover': {
            border: state.isFocused
               ? '1px solid #4096e0'
               : !error
                  ? '1px solid #a4b8c9'
                  : '1px solid red'
         }
      }),
      placeholder: base => ({
         ...base,
         color: '#a4b8c9'
      }),
      option: (base, state) => ({
         ...base,
         background: state.isSelected ? '#4096e0' : '#fff',
         ':hover': {
            background: state.isSelected ? '#4096e0' : '#cddbe7'
         }
      }),
      indicatorSeparator: () => ({
         display: 'none'
      }),
      dropdownIndicator: base => ({
         ...base,
         fontSize: '20px'
      })
   };
   return (
      <FormContext.Consumer>
         {onChange => (
            <Select
               {...rest}
               onChange={newValue => onChange(dataName, newValue)}
               styles={customStyles}
            />
         )}
      </FormContext.Consumer>
   );
};

FormSelect.propTypes = {
   dataName: PropTypes.string.isRequired,
   error: PropTypes.string
};

export default FormSelect;
