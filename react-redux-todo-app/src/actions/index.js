import * as types from './ActionTypes';

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  payload: id
});
