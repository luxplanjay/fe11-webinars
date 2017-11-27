const loadState = () => {
  try {
    const serializedState = localStorage.getItem('hw-09-data');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('hw-09-data', serializedState);
  } catch (err) {
    console.log('save state error: ', err);
  }
};
