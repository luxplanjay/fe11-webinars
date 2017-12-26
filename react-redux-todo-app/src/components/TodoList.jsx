import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onDeleteTodo, onAddToWatchList }) => (
  <div>
    {todos.map(t => (
      <Todo
        key={t.id}
        text={t.text}
        onClick={() => {
          onDeleteTodo(t.id);
        }}
        onAddToWatchList={() => {
          onAddToWatchList(t.id);
        }}
      />
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDeleteTodo: PropTypes.func.isRequired
};

export default TodoList;
