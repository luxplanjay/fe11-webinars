import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from 'components/Nav';

const navLinks = [
  {
    path: '/team',
    text: 'team'
  },
  {
    path: '/company',
    text: 'company'
  },
  {
    path: '/story',
    text: 'our story'
  }
];

const AboutPage = props => (
  <div>
    <h2>About Page</h2>
    <Nav items={navLinks} currentPath={props.match.path} />
    <Switch>
      <Route path={`${props.match.path}/team`} render={() => <h3>TEAM</h3>} />
      <Route
        path={`${props.match.path}/company`}
        render={() => <h3>COMPANY</h3>}
      />
      <Route path={`${props.match.path}/story`} render={() => <h3>STORY</h3>} />
    </Switch>
  </div>
);

export default AboutPage;
