import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import './FilterBlock.scss';

import Button from '../Button/Button';
import FieldBlock from '../FieldBlock/FieldBlock';
import StyledSelect from '../StyledSelect/StyledSelect';
import { setFilter } from '../../actions/blog';
import { blogAPI } from '../../api';

// export default () => (
//    <Select
//      defaultValue={[colourOptions[2], colourOptions[3]]}
//      isMulti
//      name="colors"
//      options={colourOptions}
//    />
//  );

class FilterBlock extends Component {
   state = {
      categories: [],
      sortby: [
         { value: 'newest', name: 'Newest' },
         { value: 'popular', name: 'Popular' },
         { value: 'oldest', name: 'Oldest' }
      ],
      filter: undefined
   };

   static getDerivedStateFromProps(nextProps) {
      if (nextProps.filter) {
         return {
            filter: nextProps.filter
         };
      }
      return null;
   }

   componentDidMount() {
      blogAPI.getCategories().then(categories => {
         this.setState({ categories });
      });
   }

   handleSelect = (name, newValue) => {
      this.setState(prevState => ({
         filter: {
            ...prevState.filter,
            [name]: newValue
         }
      }));
   };

   onFilter = () => {
      this.props.setFilter(this.state.filter);
   };

   onClear = () => {
      this.props.setFilter({ categories: [], sortby: '' });
   };

   render() {
      const { state } = this;
      return (
         <div className="filter-block">
            <StyledSelect
               onChange={newValue => {
                  this.handleSelect('categories', newValue);
               }}
               value={state.filter.categories}
               name="categories"
               isMulti
               options={state.categories}
               className="field-block"
            />
            <Button color="green" size="wide" onClick={this.onFilter}>
               Filter
            </Button>
            <Button type="clear" onClick={this.onClear}>
               Clear
            </Button>
         </div>
      );
   }
}

FilterBlock.propTypes = {
   setFilter: PropTypes.func.isRequired,
   filter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(
         PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
         })
      ),
      sortby: PropTypes.string.isRequired
   }),
   children: PropTypes.node
};

function mapStateToProps(state) {
   return {
      filter: state.blog.filter
   };
}

export default connect(mapStateToProps, { setFilter })(FilterBlock);
