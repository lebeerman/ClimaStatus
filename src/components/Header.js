import React from 'react';
import logo from '../logo.png';
import MdIconPack from 'react-icons/lib/md';

const Header = () => {
  return <div>
      <header className="App-header">
        <div className="App-slug">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ClimaStatus</h1>
        </div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="/">Profile</a>
              </li>
              <li>|</li>
              <li>
                <a href="/">Logout</a>
              </li>
              <li>
                <a href="/">Register Device</a>
              </li>
            </ul>
          </nav>
      </header>
    </div>;
}
export default Header;