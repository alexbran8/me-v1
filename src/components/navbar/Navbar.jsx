import React from 'react'
import "./navbar.css"

import {
  Link
} from "react-router-dom";


  
export const Navbar = () => {
  return (
    <nav className="navigation">
      <div
        className="navigation-menu">
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/#/whoami">whoami</a>
          </li>
          <li>
            <a href="/#/projects">latest projects</a>
          </li>
          <li>
            <a href="/#/past-experience">past experience</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}