export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + action.payload;
    case 'DECREMENT_COUNTER':
      return state - action.payload;
    default:
      return state;
  }
}
