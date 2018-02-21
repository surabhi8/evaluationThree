
import React, { Component } from 'react';
import './App.css';
import SideBar from '../SideBar/SideBar';
import Heading from '../Heading/Heading';

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <SideBar value="Bs" settingUrl="" refreshUrl="" />
        <Heading firstHeading="The" mainHeading="Book" lastHeading=" shelf" />
      </div>
    );
  }
}

export default App;

