import React from 'react';
import PropTypes from 'prop-types';
import './FieldBlock.scss';

const FieldBlock = props => {
   let el;

   if (props.type === 'select') {
      el = (
         <select
            className="field-block__field"
            name={props.name.replace(' ', '')}
            value={props.selected.toLowerCase()}
            onChange={props.onSelect}
         >
            {props.options instanceof Array &&
               props.options.map(option => (
                  <option value={option.value} key={option.value}>
                     {option.name}
                  </option>
               ))}
         </select>
      );
   }

   if (/input\[[^\]]*]/.test(props.type)) {
      let inputType = props.type.match()[1];
      el = (
         <input
            type={inputType}
            className="field-block__field"
            name={props.name.replace(' ', '')}
            placeholder={props.placeholder}
         />
      );
   }

   return (
      <div className="field-block">
         <div className="field-block__name">{props.name}</div>
         {el}
      </div>
   );
};

FieldBlock.defaultProps = {
   type: 'input[text]',
   placeholder: ''
};

FieldBlock.propTypes = {
   name: PropTypes.string.isRequired,
   onSelect: PropTypes.func,
   placeholder: PropTypes.string,
   type: PropTypes.oneOf([
      'select',
      'input[text]',
      'input[email]',
      'input[password]'
   ]),
   options: PropTypes.arrayOf(
      PropTypes.shape({
         value: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired
      })
   ),
   selected: PropTypes.string
};

export default FieldBlock;
