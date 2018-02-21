import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './BookContent.css';

class BookContent extends Component {
  render() {
    return (
      <div>
        Helllo
        <button>
          Like the picture
        </button>

      </div>
    );
  }
}

BookContent.propTypes = {
  // author: PropTypes.string.isRequired,

};

export default BookContent;
