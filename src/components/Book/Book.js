import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Book.css';
import BookContent from '../BookContent/BookContent';

class Book extends Component {
  render() {
    return (
      <div className="Book-wrapper">
        <div className="Book-picture">
          <img alt="cover" height="100%" width="100%"src={this.props.src} />
        </div>
        <div>
          <BookContent />
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Book;
