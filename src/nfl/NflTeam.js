import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NflTeam = ({ name, headcoach, logoUrl}) => 

	<li className="quick-links-list-item"> 
		<Link to='/nfl' activeClassName="quick-links-link">
			<div className="quick-links-list-item-icon">
				<img className="quick-links-list-item-icon" src={ logoUrl } alt="NFL" />
			</div>
			<div className="quick-links-list-item-detail">
				<span className="quick-links-span">{ name }</span>
			</div>
		</Link>
	</li>

export default NflTeam