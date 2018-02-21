import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import './App.css';
import SideBar from '../SideBar/SideBar';
import Heading from '../Heading/Heading';
import Shelf from '../Shelf/Shelf';
import { connect } from 'react-redux';
import { insertbook } from '../../redux/actions';
import EmptyBookComponent from '../EmptyBookComponent/EmptyBookComponent';

class App extends Component {
  // componentDidMount() {
  //   fetch('/retieve', {
  //     method: 'GET',
  //   }).then(response => response.json()).then((responseObj) => {
  //     responseObj.notesArray.forEach((note) => {
  //       const payload = {
  //         currentTitle: note.noteTitle,
  //         currentBody: note.noteBody,
  //         currentKey: note.noteKey,
  //       };
  //       this.props.saveNoteFromDataBase(payload);
  //     });
  //   });
  // }
  onSync =() => {
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
    if (typeof this.props.savedBooks !== 'undefined' && this.props.savedBooks.length > 0) {
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
    return (
      <div className="App-wrapper">
        <SideBar value="Bs" settingUrl="" refreshUrl="" />
        <div className="App-child-wrapper">
          <Heading firstHeading="The" mainHeading="Book" lastHeading=" shelf" />
          <div><EmptyBookComponent saveBooks={() => { this.onSync(); }} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  savedBooks: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
  })).isRequired,
};

const mapDispatchToProp = dispatch =>
  ({
    insertBook: (payload) => {
      dispatch(insertbook(payload));
    },
  });

const mapStateToProps = state => ({
  savedBooks: state.insertBook.savedBooks,
});
export default connect(mapStateToProps, mapDispatchToProp)(App);
