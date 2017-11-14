import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => 
<header> <p></p>
<nav className="navbar navbar-inverse">
   <div className="container-fluid">
        <div className="navbar-header">
          <NavLink to='/'>
              <img className="smallLogo" src="/img/football.png" alt="Fantasy Sports!" />
          </NavLink>
        </div>
        <div className="collapse navbar-collapse" id="header-menu">
          <ul className="nav navbar-nav navbar-right">
            <li  className="active"><NavLink to='/nfl'>NFL</NavLink></li> 
            <li><NavLink to='/collegefb'>College Football</NavLink></li> 
            <li><NavLink to='/contact-us'>Contact Us</NavLink></li> 
          </ul>
        </div>
  </div>
  </nav>
</header>

export default Header