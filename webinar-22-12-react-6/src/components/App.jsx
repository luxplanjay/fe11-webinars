import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import HomePage from 'pages/Home';
import AboutPage from 'pages/About';
import UsersPage from 'pages/Users';

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
  render() {
    return (
      <div className="App">
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
