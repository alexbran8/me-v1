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
        <li className="btn btn-2">
          <Link to="/myweekend">myWeekend</Link>
          </li>
          <li>
          <Link className="btn btn-2" to="/">me</Link>
          </li>
          <li>
          <Link className="btn btn-2" to="/whoami">whoami</Link>
          </li>
          <li>
          <Link className="btn btn-2" to="/projects">projects</Link>
          </li>
          <li>
          <Link className="btn btn-2" to="so-far">latestExperience</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}