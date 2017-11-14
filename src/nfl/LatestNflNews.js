import React, { Component } from 'react';
import axios  from 'axios';
import LatestNflNewsItem  from './LatestNflNewsItem';

class LatestNflNews extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {data: this.props.data}
  	}

	componentDidMount(){
	  var config = {
		  headers: {'Ocp-Apim-Subscription-Key': 'bf9ec657f29548d7b320f75c8e972e48'}
      };		
	  axios.get('https://api.fantasydata.net/v3/nfl/stats/json/News', config)
      .then((response) => {
        const latestNews = response.data.map(obj => obj);
        this.setState({
        	latestNewsData: latestNews
        });
      })
      .catch(function(error){
      	console.log(error);
      })
	}

	render() {
		if (!this.state.latestNewsData) return <p>Loading...</p>
		
		console.log(this.state.latestNewsData );

		return [

		  	<div className="padding-zero">
		  		<ul className="padding-zero">
		  			<li> 
		  				<div className="quick-links">
		  					<header className="quick-links-header">
		  						<h2 className="quick-links-heading"> Latest Quick Hit News </h2>
		  						<h5 className="credit">Powered by <a href="https://www.rotoballer.com"><img src="/img/rotoballer.png" width="90" alt="NFL" /></a></h5>
		  					</header>
		  					<ul className="quick-links-list">
				      		    {this.state.latestNewsData.map((item, i) => 
						        	<LatestNflNewsItem url={ item.Url } title={ item.Title } updated={ item.Updated } playerId={ item.PlayerID} team={ item.Team } />
			    				)}
		  					</ul>
		  				</div>
		  			</li>
		  		</ul>
		  	</div>
  		  ]
	}
}

export default LatestNflNews