import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  static propTypes = {
    startValue: PropTypes.number.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      counterValue: props.startValue
    };
  }

  _handleClick = evt => {
    const target = evt.target;

    this.setState(prevState => ({
      counterValue: prevState.counterValue + 1
    }));
  };

  _startCounter = () => {
    this.counterId = setInterval(() => {
      this.setState(prevState => ({
        counterValue: prevState.counterValue + 1
      }));
    }, 500);
  };

  _stopCounter = () => {
    clearInterval(this.counterId);
    this.setState({
      counterValue: this.props.startValue
    });
  };

  render() {
    const { counterValue } = this.state;

    return (
      <div>
        <h1>{counterValue}</h1>
        <button onClick={this._handleClick}>click me 1</button>
        <button onClick={this._startCounter}>start</button>
        <button onClick={this._stopCounter}>stop</button>
      </div>
    );
  }
}
