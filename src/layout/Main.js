import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../home/Home';
import Nfl from '../nfl/Nfl';
import CollegeFb from '../collegefb/CollegeFb';
import GetStarted from '../static/GetStarted';
import ContactUs from '../static/ContactUs';
import WeeklyPowerRankings from '../nfl/WeeklyPowerRankings';
	
const Main = () => 
  <main class="main-content">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/nfl' component={Nfl} />
      <Route path='/collegefb' component={CollegeFb} />
      <Route path='/getstarted' component={GetStarted} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/weekly-power-rankings' component={WeeklyPowerRankings} />
    </Switch>
  </main>

export default Main