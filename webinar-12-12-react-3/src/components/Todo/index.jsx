import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => {}
  };

  render() {
    const { text, onClick } = this.props;

    return (
      <div
        style={{
          display: 'flex'
        }}
      >
        <p>{text}</p>
        <button onClick={onClick}>-</button>
      </div>
    );
  }
}
