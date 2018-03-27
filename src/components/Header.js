import React from 'react';
import logo from '../logo.png';
import MdIconPack from 'react-icons/lib/md';

const Header = () => {
  return <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-slug">
          <h1 className="App-title">ClimaStatus</h1>
          <h3 className="App-intro">Sensor Dashboard: The Eiber Station</h3>
        </div>
      </header>
    </div>;
}
export default Header;