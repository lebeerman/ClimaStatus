import React from 'react';
import logo from '../logo.png';
import Github from 'react-icons/lib/fa/github';
import Menu from 'react-icons/lib/ti/th-menu';
import Linkedin from 'react-icons/lib/ti/social-linkedin';
import Twitter from 'react-icons/lib/ti/social-twitter';
import Profile from './db-profile.gif';

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
              <img className="user-img" src={Profile} alt="Dan Beerman"/>
            </li>
            <li>
              <a href="/">
                <Menu size={45} />
              </a>
            </li>
            <li>
              <ul className="social">
                <li>
                  <a rel="noopener noreferrer" href="https://www.github.com/lebeerman" target="_blank">
                    <Github size={30} />
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-beerman" target="_blank">
                    <Linkedin size={30} />
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="https://www.twitter.com/tobdaniel" target="_blank">
                    <Twitter size={30} />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>;
}
export default Header;