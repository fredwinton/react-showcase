import React from 'react';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';

const LatestNflNewsItem = ({ url, title, updated, playerId, team }) => 
	<li> 
		<a href={url}>
			<ul className="padding-zero">
				<li><p className="quick-links-quick-hit-item"><span>{team}-{ title } </span><span className="latestNewsUpdated"><Moment date={updated}></Moment></span></p></li>
			</ul>
		</a>
	</li>

{/*	<div className="latestNewsItem">
		<div className="latestNewsHeadline">
			<span className="player"> { playerId } </span>
			<span className="player"> { team } </span>
		</div>
		<div className="latestNewsInformation">
			<div className="latestNewsReport">
				<p> { title } </p>
			</div>
			<div className="latestNewsFrom">
				<p> { url }</p>
			</div>			
			<div className="latestNewsUpdated">
				<p> Updated on: { updated }</p>
			</div>						
		</div>
		</div>
*/}

export default LatestNflNewsItem