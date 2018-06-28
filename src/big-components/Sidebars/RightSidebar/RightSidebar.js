import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './RightSidebar.scss';

import Sidebar from '../../../components/Sidebar/Sidebar';
import './RightSidebar.scss';
import FilterBlock from '../../../components/FilterBlock/FilterBlock';

class RightSidebar extends Component {
   render() {
      return (
         <Sidebar className="right-sidebar">
            <Route
               location={location}
               path={/^\/(blog)?$/i}
               exact
               component={FilterBlock}
            />
         </Sidebar>
      );
   }
}

export default RightSidebar;
