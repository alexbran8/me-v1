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
          <Link to="/last-sunday">last sunday</Link>
          </li>
          <li>
          <Link to="/">home</Link>
          </li>
          <li>
          <Link to="/whoami">whoami</Link>
          </li>
          <li>
          <Link to="/projects">projects</Link>
          </li>
          <li>
          <Link to="/latest-experience">latest experience</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}