import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
import watchlistReducer from './watchlistReducer';

export default combineReducers({
  counterValue: counterReducer,
  todos: todoReducer,
  watchlist: watchlistReducer
});
