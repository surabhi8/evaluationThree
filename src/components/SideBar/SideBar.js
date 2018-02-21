import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../SideBar/SideBar.css';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar-wrapper">
        <div className="SideBar-value">
          {this.props.value}
        </div>
        <div className="SideBar-Icons">
          <div className="SideBar-settings">
            <img alt="refresh" src={this.props.settingUrl} />
          </div>
          <div className="SideBar-refresh">
            <img alt="setting" src={this.props.refreshUrl} />
          </div>
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {
  value: PropTypes.string.isRequired,
  settingUrl: PropTypes.string.isRequired,
  refreshUrl: PropTypes.string.isRequired,

};

export default SideBar;
