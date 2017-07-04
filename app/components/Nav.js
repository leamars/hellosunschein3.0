import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName='active' to='/about'>
            About
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName='active' to='/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav;
