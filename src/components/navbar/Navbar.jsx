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
          <Link to="/myweekend">myWeekend</Link>
          </li>
          <li>
          <Link to="/">me</Link>
          </li>
          <li>
          <Link to="/whoami">whoami</Link>
          </li>
          <li>
          <Link to="/projects">projects</Link>
          </li>
          <li>
          <Link to="so-far">latestExperience</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}