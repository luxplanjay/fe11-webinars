import React from 'react';
import './styles.css';

class Header extends React.Component {
  render() {
    const { text } = this.props;
    console.log(this.props.children);

    return (
      <header className="Header">
        <div className="Header__logo">
          {this.props.children}
        </div>
        <h1 className="Header__text">{text}</h1>
      </header>
    );
  }
}

export default Header;
