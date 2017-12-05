import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    const { text } = this.props;

    return <h1 className="Header">{text}</h1>;
  }
}

export default Header;
