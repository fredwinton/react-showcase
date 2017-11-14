import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => 
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div class="navbar-header"><Link to='/'><a class="navbar-brand" href="#">Fantasy Sports!</a></Link>
                 <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
        </div>
      	<div className="navbar-header">
	      <ul className="nav navbar-nav">
	        <li><Link to='/'><i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;Home </Link></li>
	        <li><Link to='/nfl'><i className="fa fa-life-ring" aria-hidden="true"></i>&nbsp;&nbsp;NFL Home</Link></li>
	        <li><Link to='/collegefb'><i className="fa fa-newspaper-o" aria-hidden="true"></i>&nbsp;&nbsp;College Football Home</Link></li>
	       </ul>
      	</div>
      </div>

    </nav>


export default Header