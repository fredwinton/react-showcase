import React, { Component } from 'react';
import Teams from './Teams'
import QuickLinkTeams from './QuickLinkTeams'
import LatestNflNews from './LatestNflNews'
import { NavLink } from 'react-router-dom';

const Nfl = () => (
  <div  className="container">
  	  <div className="row">
		  <div className="col-sm-3 nfl-left-col">
		  	<div className="padding-zero">
		  		<ul className="padding-zero">
		  			<li> 
		  				<div className="quick-links">
		  					<header className="quick-links-header">
		  						<h2 className="quick-links-heading"> Quick Hits </h2>
		  					</header>
		  					<ul className="quick-links-list">
		  						<li className="quick-links-list-item"> 
			  						<NavLink to='/weekly-power-rankings' activeClassName="quick-links-link">

			  								<div className="quick-links-list-item-icon">
			  									<img className="quick-links-list-item-icon" src="/img/nfl.png" alt="NFL" />
			  								</div>
			  								<div className="quick-links-list-item-detail">
			  									<span className="quick-links-span"> Weekly Power Rankings</span>
			  								</div>		  								

			  						</NavLink>
		  						</li>
		  						<li className="quick-links-list-item"> 
			  						<NavLink to='/nfl' activeClassName="quick-links-link">
			  								<div className="quick-links-list-item-icon">
			  									<img className="quick-links-list-item-icon" src="/img/nfl.png" alt="NFL" />
			  								</div>
			  								<div className="quick-links-list-item-detail">
			  									<span className="quick-links-span">Who did the experts pick?</span>
			  								</div>		  								
			  						</NavLink>
		  						</li>
		  						<li className="quick-links-list-item"> 
			  						<NavLink to='/nfl' activeClassName="quick-links-link">

			  								<div className="quick-links-list-item-icon">
			  									<img className="quick-links-list-item-icon" src="/img/nfl.png" alt="NFL" />
			  								</div>
			  								<div className="quick-links-list-item-detail">
			  									<span className="quick-links-span">Trade Tracker </span>
			  								</div>		  								

			  						</NavLink>
		  						</li>
		  						<li className="quick-links-list-item"> 
			  						<NavLink to='/nfl' activeClassName="quick-links-link">
			  								<div className="quick-links-list-item-icon">
			  									<img className="quick-links-list-item-icon" src="/img/nfl.png" alt="NFL" />
			  								</div>
			  								<div className="quick-links-list-item-detail">
			  									<span className="quick-links-span">Top Fantasy Players</span>
			  								</div>		  								
			  						</NavLink>
		  						</li>
		  					</ul>
		  				</div>
		  				<div className="quick-links">
		  					<header className="quick-links-header">
		  						<h2 className="quick-links-heading"> Teams </h2>
		  					</header>
		  					<QuickLinkTeams />
		  				</div>
		  			</li>
		  		</ul>
		  	</div>
		  </div>	      
	      <div className='col-sm-7 nfl-middle-col'>
	      	<section className="content-feed">
		      	<section className="content-feed-hero">
		      		<article class="content-item-hero">
						<p className="padding-zero"><img className="padding-zero" src="img/jay_ajayi.jpg" alt="Jay Ajayi" width="660" /></p>
						<section className="content-item-story-wrapper">
							<section className="content-item-story">

									<section className="content-item-content">
										<h1 className="content-item-title"> Keep on riding the Ajayi Train for Week 10</h1>
										<p> Week 10 is upon us and we have passed the midpoint for the NFL 2017 season. Who should you target on the waiver wire this week?</p>
									</section>

							</section>
						</section>
		      		</article>
		      	</section>

				<section className="content-feed-item">

					<section>

									<a href="www.nfl.com" className="content-feed-item-story-wrapper">
										<div className="container nfl-middle-col">
								           <div className="row nfl-middle-col">
									       <div className="col-sm-3 padding-zero">
										   <div className="media-wrapper">
											<img className="block-image" src="img/midseason.jpg" width="150" alt="Midseason awards" />
										   </div>
										   </div>


									       <div className="col-sm-9">

										   <div className="content-feed-item-story-content">
											<h1 className="content-item-title"> The NFL Midseason All Pro Team</h1>
											<p> Ezekiel Elliot has faced suspension all season and is still at the top of the rushing stats. Here is the top players so far in 2017. </p>
										   </div>

								           </div>
							               </div>
							             </div>
									</a>
					</section>



				</section>

	      	</section>
		  </div>
		  <div className='col-sm-2'>
		  <div className="col-sm-3 nfl-right-col">
		  		<LatestNflNews />
		  </div>	      

		  </div>
	  </div>
	  <div className="row">
			  <div className="container-fluid">
			  	<div className="row">
					<div className="col-sm-2">
		  			   {/* 	<LatestNflNews /> */}
					</div>		  	
		  	        <div className="col-sm-7">
		  				{/* <Teams /> */}
					</div>
					<div className="col-sm-3">
		  				&nbsp;
					</div>
			  	</div>
			  </div>
		  </div>
	  </div> 
)

export default Nfl