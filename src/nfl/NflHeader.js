import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NflHeader = () => 

<nav className="navbar">
     <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle navbar-toggle-right" data-toggle="collapse" data-target="#header-menu">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span> 
            </button>
            <Link to='/'><a className="navbar-brand" href="#">
                <img className="smallLogo" src="/img/football.png" alt="Fantasy Sports!" />
            </a></Link>
          </div>
          <div className="collapse navbar-collapse" id="header-menu">
            <ul className="nav navbar-nav navbar-right">
              <li  className="active"><Link to='/nfl'>NFL</Link></li> 
              <li><Link to='/collegefb'>College Football</Link></li> 
              <li><Link to='/contact-us'>Contact Us</Link></li> 
            </ul>
          </div>
    </div>
</nav>


export default NflHeader