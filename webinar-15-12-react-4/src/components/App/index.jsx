import React, { Component } from 'react';
import PropTypes from 'prop-types';
import v4 from 'uuid/v4';
import AddTodoForm from 'components/AddTodoForm';
import TodoList from 'components/TodoList';
// import Counter from 'components/Counter';
// import LoginForm from 'components/LoginForm';
import Icon from 'components/Icon';
import './styles.css';
import logoImage from './assets/logo.svg';

export default class App extends Component {
  static childContextTypes = {
    color: PropTypes.string
  };

  state = {
    todos: []
  };

  getChildContext() {
    return {
      color: 'red'
    };
  }

  onAddTodo = text => {
    const todo = {
      id: v4(),
      text: text
    };

    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  onDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <Icon icon={`${logoImage}#root`} />
        {/* <LoginForm /> */}
        <AddTodoForm onFormSubmit={this.onAddTodo} />
        <TodoList todos={todos} onTodoClick={this.onDeleteTodo} />
      </div>
    );
  }
}
