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

  // componentWillMount() {
  //   console.log('[TodoList.jsx], componentWillMount()');
  // }

  // componentDidMount() {
  //   console.log('[TodoList.jsx], componentDidMount()');
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('[TodoList.jsx], componentWillReceiveProps()');
  //   console.log('nextProps: ', nextProps);
  //   console.log('this.props: ', this.props);
  //   return true;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[TodoList.jsx], shouldComponentUpdate()');
  //   return true;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('[TodoList.jsx], componentWillUpdate()');
  // }

  // componentDidUpdate() {
  //   console.log('[TodoList.jsx], componentDidUpdate()');
  // }

  render() {
    // console.log('[TodoList.jsx], render()');
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
