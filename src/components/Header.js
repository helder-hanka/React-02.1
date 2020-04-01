import React from 'react'
import logo from '../logo.svg';

import "./Header.css"

const Header = () => {
    return (
        <header className="header-header">
          <img src={logo} className="header-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to Helder.
          </p>
          <a
            className="header-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    )
}

export default Header