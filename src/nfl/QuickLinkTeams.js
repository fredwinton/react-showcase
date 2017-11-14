import React, { Component } from 'react';
import NflTeam  from './NflTeam';
import axios  from 'axios';

class QuickLinkTeams extends React.Component {
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
		  <ul className="quick-links-list">
		  
			{this.state.teamData.map((team, i) => 
	         	<NflTeam key={i} name={team.FullName} headcoach={team.HeadCoach} logoUrl={team.WikipediaLogoUrl} />
    		)}

		  </ul>

		  ]
	}
}

export default QuickLinkTeams