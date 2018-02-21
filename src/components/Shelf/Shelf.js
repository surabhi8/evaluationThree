import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Shelf.css';
import Book from '../Book/Book';

class Shelf extends Component {
  render() {
    return (
      <div className="Shelf-wrapper">
        <div className="Shelf-author">
          {this.props.author}
        </div>
        <Book src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg" />
      </div>
    );
  }
}

Shelf.propTypes = {
  author: PropTypes.string.isRequired,

};

export default Shelf;
