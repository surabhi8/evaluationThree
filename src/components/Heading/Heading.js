import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Heading.css';

class Heading extends Component {
  render() {
    return (
      <div className="Heading-wrapper">
        <div className="Heading-child-wrapper">
          <div className="Heading-first"> {this.props.firstHeading}</div>
          <div className="Heading-big"> {this.props.mainHeading}</div>
          <div className="Heading-last">{this.props.lastHeading}</div>
        </div>
      </div>
    );
  }
}

Heading.propTypes = {
  mainHeading: PropTypes.string.isRequired,
  firstHeading: PropTypes.string.isRequired,
  lastHeading: PropTypes.string.isRequired,

};

export default Heading;
