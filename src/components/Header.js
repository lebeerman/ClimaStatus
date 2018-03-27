import React from 'react';
import logo from '../logo.png';
import MdIconPack from 'react-icons/lib/md';

const Header = () => {
  return <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ClimaStatus</h1>
      </header>
    </div>;
}
export default Header;