import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
  static propTypes = {};

  state = {
    loginInptValue: '',
    passInptValue: ''
  };

  _handleLoginInputChange = evt => {
    const value = evt.target.value;

    this.setState({
      loginInptValue: value
    });
  };

  _handlePassInputChange = evt => {
    const value = evt.target.value;

    this.setState({
      passInptValue: value
    });
  };

  _handleFormSubmit = evt => {
    evt.preventDefault();

    const userData = {
      login: this.state.loginInptValue,
      pass: this.state.passInptValue
    };

    console.log(JSON.stringify(userData));
  };

  render() {
    const { loginInptValue, passInptValue } = this.state;
    return (
      <form onSubmit={this._handleFormSubmit}>
        <input
          type="text"
          value={loginInptValue}
          onChange={this._handleLoginInputChange}
        />
        <input
          type="password"
          value={passInptValue}
          onChange={this._handlePassInputChange}
        />
        <button type="submit">login</button>
      </form>
    );
  }
}
