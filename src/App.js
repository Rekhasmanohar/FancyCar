import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent/Header';
import DropdownComponent from './DropdownComponent/DropdownComponent';
import RouterComponent from './RouterComponent/RouterComponent';


class App extends Component {
  render() {
    return (
      <div>
        
        <HeaderComponent/>
        <DropdownComponent/>
        <RouterComponent/>
        
      </div>
    );
  }
}

export default App;
