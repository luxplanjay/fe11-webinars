import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoListContainer from 'containers/TodoListContainer';
import WatchList from './WatchList';
import Counter from './Counter';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 600px;
  margin: auto;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <WatchList />
        <Counter />
        <AddTodoForm />
        <TodoListContainer />
      </AppContainer>
    );
  }
}

export default App;
