import React, { Component } from 'react';
import v4 from 'uuid/v4';
import AddTodoForm from 'components/AddTodoForm';
import TodoList from 'components/TodoList';
// import Icon from 'components/Icon';
// import logoImage from './assets/logo.svg';
import './styles.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      isTrue: false
    };

    console.log('[App.jsx], constructor()');
  }

  componentWillMount() {
    console.log('[App.jsx], componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.jsx], componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextState: ', nextState);
    console.log('this.state: ', this.state);

    return true;
  }

  componentDidUpdate() {
    console.log('[App.jsx], componentDidUpdate()');
  }

  componentWillUpdate() {
    console.log('[App.jsx], componentWillUpdate()');
  }

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
    console.log('[App.jsx], render()');
    const { todos } = this.state;

    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({
              isTrue: true
            });
          }}
        >
          SET TRUE
        </button>
        <AddTodoForm onFormSubmit={this.onAddTodo} />
        <TodoList todos={todos} onTodoClick={this.onDeleteTodo} />
      </div>
    );
  }
}
