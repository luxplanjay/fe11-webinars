import { connect } from 'react-redux';
import TodoList from 'components/TodoList';
import * as actions from 'actions';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo(id) {
    dispatch(actions.deleteTodo(id));
  },
  onAddToWatchList(id) {
    dispatch({
      type: 'ADD_TO_WATCHLIST',
      payload: id
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
