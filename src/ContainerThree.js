import React, { Component } from 'react';
import './containerThree.css';

class ContainerThree extends Component {
	render() {
		return (
			<div className="container-three">
				<h1>Projects</h1>
				<div className="inner-flex media">
					<div className="inner-flex-row"> 
						<div className="flex-item flex-item-1">
							<div className="overlay">
								<a href="https://github.com/JSumulong/Congo_Directory"></a>
								<h2>Congo Directory</h2>
								<p>This is a Rails project that will be used as a public directory for businesses in the Democratic Republic of Congo. The goal is to serve the community by providing business owners with a free opportunity to gain a greater online presence.</p>
							</div>
						</div>
						<div className="flex-description description-color-1"> <span>Congo Directory</span> </div>
					</div>
					<div className="inner-flex-row">
						<div className="flex-description description-color-2"> <span>Totem</span> </div>
						<div className="flex-item flex-item-2">
							<div className="overlay">
								<a href="https://github.com/JSumulong/totem-front-end"></a>
								<h2>Totem</h2>
								<p>Project Totem is a native Android application that allows users to find other users in augmented reality. This project was designed to allow the contributing members an opportunity to learn new technology at a rapid pace under the pressure of an eight day time constraint and with the expectation of presenting a working demo during the 2016 Coyotes graduation ceremony.</p>
							</div>
						</div>
					</div>
					<div className="inner-flex-row">
						<div className="flex-item flex-item-3">
							<div className="overlay">
								<a href="https://github.com/JSumulong/remindr"></a>
								<h2>Remindr</h2>
								<p>This is a web app that allows users to store a list of contacts and schedule reminders to be sent to a contact or a group of contacts on one's contact list via text messages. The reminders may be recurring and users can specify the number of times and frequency at which the reminder can be sent.</p>
							</div>
						</div>
						<div className="flex-description description-color-3"> <span>Remindr</span> </div>
					</div>
				</div>
			</div>
		)
	}
}

export default ContainerThree;