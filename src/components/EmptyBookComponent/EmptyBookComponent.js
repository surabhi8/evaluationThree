import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './EmptyBookComponent.css';

class EmptyBookComponent extends Component {
  render() {
    return (
      <div className="EmptyBookComponent-wrapper">
        OOPs! No books found!
        Import them now!
        <a
          onClick={() => {
          this.props.saveBooks();
           }}
        >
          <img src="./refresh.jpg" alt="refersh" />
        </a>
      </div>
    );
  }
}

EmptyBookComponent.propTypes = {
  saveBooks: PropTypes.func.isRequired,
};

export default EmptyBookComponent;
