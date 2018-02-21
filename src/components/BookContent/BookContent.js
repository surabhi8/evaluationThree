import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './BookContent.css';

class BookContent extends Component {
    onLike =() => {

    }
    render() {
      return (
        <div>
          <button onClick={this.onLike}>
            Heart
          </button>

        </div>
      );
    }
}

export default BookContent;
