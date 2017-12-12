import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toggler extends Component {
  static propTypes = {};

  state = {
    isVisible: true
  };

  _handleClick = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this._handleClick}>toggle</button>
        {this.state.isVisible && <h1>U can see me now!</h1>}
        {this.state.isVisible ? (
          <div>
            <p>is true</p>
            <p>is true</p>
          </div>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
