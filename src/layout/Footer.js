import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => 
    <footer id="myFooter">
        <div className="container">
            <div class="row">
                <div className="col-sm-3">
                    <h2 className="logo">
                        <NavLink to='/' activeClassName="quick-links-link">Fantasy Sports</NavLink>
                    </h2>
                </div>
                <div className="col-sm-2">
                    <h5>Site Links</h5>
                    <ul>
                        <li><NavLink to='/' >Home</NavLink></li>
                        <li><NavLink to='/nfl' >NFL</NavLink></li>
                        <li><NavLink to='/help' >Help</NavLink></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>About us</h5>
                    <ul>
                        <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>Fantasy Guides</h5>
                    <ul>
                        <li><NavLink to='/nfl' >NFL</NavLink></li>
                        <li><NavLink to='/collegefb'>College Football</NavLink></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <div className="social-networks">
                        <a href="https://twitter.com/FredWilliams" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="https://facebook.com" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="https://plus.google.com/" className="google"><i className="fa fa-google-plus"></i></a>
                    </div>
                    <a class="btn" href="/contact-us">Contact Us</a>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2017 Fantasy Sports by FredWill.com All Rights Reserved. </p>
        </div>
    </footer>


export default Footer