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
  onSync =() => {
    fetch('/retrieve', {
      method: 'GET',
    }).then(response => response.json()).then((responseObj) => {
      responseObj.booksArray.forEach((book) => {
        const payload = {
          author: book.author,
          name: book.title,
          bookId: book.bookId,
          Likes: book.Likes,
          rating: book.rating,
        };
        this.props.insertBook(payload);
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
  insertBook: PropTypes.string.isRequired,
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
