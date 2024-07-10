import React, {usestate} from "react";
import { NavLink } from "react-router-dom";
//mport {IoClose, IoMenu} from "react-icons/io5";
import '../css/navbar.css'

const Navbar = () =>
{
  return(
    <header className="header">
      <nav className="nav container">
        <NavLink to = "/" className="nav__logo">
        Navigation Bar
        </NavLink>
        <div className={"nav__menu"} id = "nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/portfolio" className="nav__link">
                Portfolio
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/writeups" className="nav__link">
                Write Ups
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/ctf" className="nav__link">
                CTF Creations
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about_me" className="nav__link">
                About Me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;