import React from 'react';
import PropTypes from 'prop-types';
import Todo from 'components/Todo';

const TodoList = ({ todos, onTodoClick }) => (
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

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
