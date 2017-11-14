import React, { Component } from 'react';
//import ApiHelper from '../services/ApiHelper';
import NflTeams  from './NflTeams';
import axios  from 'axios';

class Teams extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {data: this.props.data}
  	}

	componentDidMount(){
	  var config = {
		  headers: {'Ocp-Apim-Subscription-Key': 'bf9ec657f29548d7b320f75c8e972e48'}
      };

	  axios.get('https://api.fantasydata.net/v3/nfl/scores/json/Teams', config)
      .then((response) => {
        const theTeams = response.data.map(obj => obj);
        this.setState({
        	teamData: theTeams
        });
      })
      .catch(function(error){
      	console.log(error);
      })
	}

	render() {
		if (!this.state.teamData) return <p>Loading...</p>

		return [
		  <div className="panel panel-primary">
		    <div className="panel-heading">NFL Team Links</div>
		    <div className="panel-body">
			    <div className="col-xs-6">
			    		<h2 class="sub-header">NFC</h2>
			        	<NflTeams theTeams={this.state.teamData}  conference="NFC" />
		    	</div>
			    <div className="col-xs-6">
			    		<h2 class="sub-header">AFC</h2>
			        	<NflTeams theTeams={this.state.teamData} conference="AFC" />
		    	</div>	    	
		    	</div>
  		  </div>
  		  ]
	}
}

export default Teams