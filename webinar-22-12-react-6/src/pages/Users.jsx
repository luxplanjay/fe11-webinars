import React from 'react';
import { Route } from 'react-router-dom';
import Nav from 'components/Nav';
import UserCard from 'components/UserCard';
import users from 'fakeDatabase';

const makeNavLinks = (users, path) =>
  users.map(u => ({
    path: `${path}/${u.id}`,
    text: u.name
  }));

const getUserByID = (users, id) => users.find(u => u.id === id);

const UsersPage = ({ match }) => {
  return (
    <div>
      <h2>Users Page</h2>
      <Nav items={makeNavLinks(users, match.path)} />
      <Route
        path="/users/:userID"
        render={props => {
          const userID = props.match.params.userID;
          const user = getUserByID(users, userID);

          return user
            ? <UserCard {...user} {...props} />
            : <h1>SORRY, USER NOT FOUND!</h1>;
        }}
      />
    </div>
  );
};

export default UsersPage;
