import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './logo.webp';
import headerStyles from './header.module.css';

const Header = () => {
  let navStyle=({isActive}) => {
            return (
              {
              color:isActive?"red":"black"
            }
          )
        }
  return (
    <header className={headerStyles.header}>
      <nav
        className="navbar navbar-expand-md navbar-light p-0"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt='Logo' />
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={navStyle}
                >Home
                 </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services" style={navStyle}>Services
                 </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/bookservice" style={navStyle}>Book Service
                 </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/offers" style={navStyle}>Offers
                 </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus" style={navStyle}>Contact Us
                 </NavLink>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
      
      
      </header>
  )
}

export default Header