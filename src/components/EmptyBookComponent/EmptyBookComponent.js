import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './EmptyBookComponent.css';

class EmptyBookComponent extends Component {
  render() {
    return (
      <div className="EmptyBookComponent-wrapper">

        <a
          onClick={() => {
          this.props.saveBooks();
           }}
        >
          <img src="" alt="refersh" />
        </a>
      </div>
    );
  }
}

EmptyBookComponent.propTypes = {
  saveBooks: PropTypes.func.isRequired,
};

export default EmptyBookComponent;
