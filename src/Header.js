import React, { Component } from 'react';
import './Header.css'
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class Header extends Component {
		constructor() {
			super();
			this.scrollToAboutMe = this.scrollToAboutMe.bind(this);
			this.scrollToProjects = this.scrollToProjects.bind(this);
			this.scrollToContact = this.scrollToContact.bind(this);
			this.scrollToResources = this.scrollToResources.bind(this);
		}
		scrollToAboutMe() {
			const aboutMeContainer = document.querySelector('.container-two');
			aboutMeContainer.scrollIntoView();
		}
		scrollToProjects() {
			const projectsContainer = document.querySelector('.container-three');
			projectsContainer.scrollIntoView();
		}
		scrollToContact() {
			const contactContainer = document.querySelector('.container-four');
			contactContainer.scrollIntoView();
		}
		scrollToResources() {
			const resourcesContainer = document.querySelector('.container-five');
			resourcesContainer.scrollIntoView();
		}
	render() {
		return (
			<Navbar fixedTop={true} className="navbar-custom" collapseOnSelect>
					<Nav>
						<NavItem className="header-aboutMe" onClick={this.scrollToAboutMe}>About Me</NavItem>
						<NavItem className="header-projects" onClick={this.scrollToProjects}>Projects</NavItem>
						<NavItem className="header-connect" onClick={this.scrollToContact}>Connect</NavItem>
						<NavItem className="header-resources" onClick={this.scrollToResources}>Resources</NavItem>
					</Nav>
			</Navbar>
		)
	}
}

export default Header;
