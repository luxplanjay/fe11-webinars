export default function watchlistReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      return state.includes(action.payload)
        ? state
        : [...state, action.payload];
    default:
      return state;
  }
}
