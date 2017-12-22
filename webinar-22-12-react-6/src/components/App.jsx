import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import HomePage from 'pages/Home';
import AboutPage from 'pages/About';
import UsersPage from 'pages/Users';
import Modal from './Modal';

const navLinks = [
  {
    path: '/',
    text: 'home'
  },
  {
    path: '/about',
    text: 'about'
  },
  {
    path: '/users',
    text: 'users'
  }
];

class App extends Component {
  state = {
    isVisible: false
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleModal}>show modal</button>
        {isVisible && <Modal onClose={this.toggleModal}>SOME CONTENT</Modal>}

        <h1>App component</h1>
        <Nav items={navLinks} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/users" component={UsersPage} />
          <Redirect to="/" />
          {/* <Route render={() => <h2>404 PAGE NOT FOUND</h2>} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
