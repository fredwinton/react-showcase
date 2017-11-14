import React, { Component } from 'react';
import ApiHelper from '../services/ApiHelper';

class Teams extends React.Component {
	componentWillMount(){
		this.setState({loading: true})
//		var promiseObj = ApiHelper.getNflTeams();
//		promiseObj.then(function(data) {
//			console.log(data);
//		})
	  ApiHelper.getAllNflTeams()
      .then(function(data){
      	this.setState(function() {
      		var repos = JSON.stringify(data);
      		JSON.parse(repos, (key, value) => {
			  if (typeof value === 'string') {
			  	console.log(key, value);
			    //return value.toUpperCase();
			  }
			  //return value;
			});
      		loading:false;
  			return {
          		repos
          		
  			};
		})


        // this.setState({
        //   repos: JSON.stringify(data),
        //   loading:false
        // })
       // this.setState({
       //    key: data.key,
       //    teamId: data.teamId,
       //    loading:false
       //  })


      }.bind(this))
	}
	render() {
		const {Key} = this.state
		return [
		  <div className="panel panel-primary">
		    <div className="panel-heading">Data</div>
		    <div className="panel-body">
		        <div className="panel-body" id="getTeamsResult">
		        	{this.state.repos}
		        </div>
	    	</div>
  		  </div>
  		  ]
	}
}

export default Teams