import React from 'react';
import logo from '../logo.png';
import User from 'react-icons/lib/fa/user';
import Github from 'react-icons/lib/fa/github';
import Menu from 'react-icons/lib/ti/th-menu';
import Linkedin from 'react-icons/lib/ti/social-linkedin';
import Twitter from 'react-icons/lib/ti/social-twitter';

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
              <a href="/">
                <Menu size={45} />
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="www.github.com/lebeerman">
                <Github size={45} />
              </a>
            </li>
            <li>
              <a href="www.linkedin.com/in/daniel-beerman">
                <Linkedin size={45} />
              </a>
            </li>
            <li>
              <a href="www.twitter.com/tobdaniel">
                <Twitter size={45} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>;
}
export default Header;