
import React, { Component } from 'react';
import './App.css';
import SideBar from '../SideBar/SideBar';
import Heading from '../Heading/Heading';
import Shelf from '../Shelf/Shelf';

class App extends Component {
  componentDidMount() {
    fetch('/retieve', {
      method: 'GET',
    }).then(response => response.json()).then((responseObj) => {
      responseObj.notesArray.forEach((note) => {
        const payload = {
          currentTitle: note.noteTitle,
          currentBody: note.noteBody,
          currentKey: note.noteKey,
        };
        this.props.saveNoteFromDataBase(payload);
      });
    });
  }
  render() {
    return (
      <div className="App-wrapper">
        <SideBar value="Bs" settingUrl="" refreshUrl="" />
        <div className="App-child-wrapper">
          <Heading firstHeading="The" mainHeading="Book" lastHeading=" shelf" />
          <Shelf author="J K Rowling" />
        </div>
      </div>
    );
  }
}

export default App;

