import React from 'react';
import NflTeam  from './NflTeam';

function DivideIntoConference(props) {
	let conferenceTeams = [];
	var localAllTeams = props.allTeams;
	//console.log(localAllTeams );
	for (var i = 0; i < localAllTeams.length; i++) {
		let aTeam = localAllTeams[i];

		if (aTeam.Conference == props.desiredConference) {
			conferenceTeams.push(localAllTeams[i]);
		}
	}
	//console.log(conferenceTeams );
	return (
		[
 		<thead>
                <tr>
                	<th>#</th>
                    <th>Name</th>
                    <th>Head Coach</th>
                </tr>
        </thead>,
        <tbody>

			{conferenceTeams.map((team, i) => 
			         <NflTeam key={i} name={team.FullName}
			              headcoach={team.HeadCoach} logoUrl={team.WikipediaLogoUrl} />
		    )}

         </tbody>
         ]
		)
}


const NflTeams = props => {
	return (
		[<table className="table table-striped">
			{ <DivideIntoConference allTeams={ props.theTeams } desiredConference={ props.conference }/> }
		 </table>
		]
	)
}

export default NflTeams