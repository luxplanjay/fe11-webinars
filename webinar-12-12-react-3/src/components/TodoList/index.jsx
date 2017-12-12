import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from 'components/Todo';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
  };

  render() {
    const { todos, onTodoClick } = this.props;
    return (
      <div>
        {todos.map(t => (
          <Todo
            key={t.id}
            text={t.text}
            onClick={() => {
              onTodoClick(t.id);
            }}
          />
        ))}
      </div>
    );
  }
}
