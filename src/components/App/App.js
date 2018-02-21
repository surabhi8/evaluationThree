
import React, { Component } from 'react';
import './App.css';
import SideBar from '../SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <SideBar value="Bs" settingUrl="" refreshUrl="" />
      </div>
    );
  }
}

export default App;

