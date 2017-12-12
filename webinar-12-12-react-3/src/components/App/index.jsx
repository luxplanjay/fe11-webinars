import React, { Component } from 'react';
import v4 from 'uuid/v4';
// import Counter from 'components/Counter';
// import Toggler from 'components/Toggler';
// import LoginForm from 'components/LoginForm';
import AddTodoForm from 'components/AddTodoForm';
import TodoList from 'components/TodoList';
import './styles.css';

class App extends Component {
  state = {
    todos: []
  };

  onAddTodo = text => {
    const todo = {
      id: v4(),
      text: text
    };

    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  onDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <AddTodoForm onFormSubmit={this.onAddTodo} />
        {/* <p>{JSON.stringify(this.state.todos)}</p> */}
        <TodoList todos={todos} onTodoClick={this.onDeleteTodo} />
        {/* <Counter startValue={0} />
        <Counter startValue={1} />
        <Toggler>
          <h1>qweqwe</h1>
        </Toggler> */}
        {/* <LoginForm /> */}
      </div>
    );
  }
}

export default App;
