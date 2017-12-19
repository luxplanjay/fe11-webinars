import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import './styles.css';

export default class AddTodoForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  };

  state = {
    inputValue: ''
  };

  _handleInputChange = evt => {
    const value = evt.target.value;

    this.setState({
      inputValue: value
    });
  };

  _handleSubmit = evt => {
    evt.preventDefault();

    this.props.onFormSubmit(this.state.inputValue);

    this.setState({
      inputValue: ''
    });
  };

  // componentWillMount() {
  //   console.log('[AddTodoForm.jsx], componentWillMount()');
  // }

  // componentDidMount() {
  //   console.log('[AddTodoForm.jsx], componentDidMount()');
  // }

  render() {
    // console.log('[AddTodoForm.jsx], render()');
    const { inputValue } = this.state;

    return (
      <form onSubmit={this._handleSubmit} className="AddTodoForm">
        <input
          type="text"
          value={inputValue}
          onChange={this._handleInputChange}
        />
        <Button type="submit" text="+" cls="AddTodoForm__button" />
      </form>
    );
  }
}
