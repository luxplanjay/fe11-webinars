import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ value, incrementCounter, decrementCounter }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={incrementCounter}>+</button>
    <button onClick={decrementCounter}>-</button>
  </div>
);

const mapStateToProps = state => ({
  value: state.counterValue
});

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter() {
      dispatch({
        type: 'INCREMENT_COUNTER',
        payload: 10
      });
    },
    decrementCounter() {
      dispatch({
        type: 'DECREMENT_COUNTER',
        payload: 15
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
