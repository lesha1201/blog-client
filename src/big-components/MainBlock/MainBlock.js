import React from 'react';
import PropTypes from 'prop-types';
import './MainBlock.scss';

class MainBlock extends React.Component {
   render() {
      return (
         <main role="main" className="main-content">
            {this.props.children}
         </main>
      );
   }
}
// const MainBlock = props => {
//    return (
//       <main role="main" className="main-content">
//          {props.children}
//       </main>
//    );
// };

MainBlock.propTypes = {
   children: PropTypes.node.isRequired
};

export default MainBlock;
