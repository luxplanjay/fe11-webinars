import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    value: 0
  };

  _handleClick = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1
      };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={this._handleClick}>+</button>
      </div>
    );
  }
}

// button.addEventListener('click', _handleClick)
