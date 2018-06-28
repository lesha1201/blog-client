import React from 'react';
import Select from 'react-select';

const customStyles = {
   control: base => ({
      ...base,
      background: '#2e344d',
      border: 'none',
      borderRadius: '10px',
      padding: '5px 15px'
   }),
   placeholder: base => ({
      ...base,
      color: '#5a627f'
   }),
   option: base => ({
      ...base,
      background: '#2e344d',
      ':hover': {
         background: '#3e4460'
      }
   }),
   menu: base => ({
      ...base,
      background: '#2e344d'
   }),
   indicatorSeparator: () => ({
      display: 'none'
   }),
   dropdownIndicator: base => ({
      ...base,
      fontSize: '20px'
   }),
   input: base => ({
      ...base,
      color: '#fff'
   })
};

const StyledSelect = ({ ...props }) => {
   return <Select {...props} styles={customStyles} />;
};

export default StyledSelect;
