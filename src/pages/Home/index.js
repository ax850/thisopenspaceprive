import React from 'react';

import {HostContainer} from "./Components/Hosts/hostsContainer";
import {Nav} from "../../components/Nav";

const navItems = [
  {name: 'Home', url: '/'}
];

class HomePage extends React.Component {


  render() {
    return (
      <div id={'home-wrapper'}>
        <Nav navItems={navItems}/>
        <HostContainer/>
      </div>
    )
  }
}

/* Function Decorator, state is retrieved from Root Reducer */

export {HomePage}