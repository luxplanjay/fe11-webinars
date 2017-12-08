import React from 'react';
import logoIcon from './assets/logo.png';
import './styles.css';

class Logo extends React.Component {
  render() {
    return <img className="Logo" src={logoIcon} />;
  }
}

export default Logo;
