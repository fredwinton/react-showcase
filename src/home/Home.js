import React, { Component } from 'react';

const Home = () => (
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-lg-offset-1 col-md-6">
                <h1>Are you out there, sports fans?</h1>
                <p className="home-page-text">Welcome to the brand new fantasy sports and information site.  Brilliant insights, updated news and analysis, statistics and articles written
                   by the best fantasy sports authors in the business. </p>
                <button className="btn btn-default btn-lg action-button" type="button">Get started</button>
            </div>
            <div className="col-lg-5 col-lg-offset-0 col-md-5 col-md-offset-1 hidden-xs hidden-sm">
                <div className="iphone-mockup"><img src="/img/fantasy.png" className="device" />
                    <div className="screen"></div>
                </div>
            </div>
        </div>
    </div>	
)

export default Home