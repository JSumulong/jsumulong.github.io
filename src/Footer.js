import React, { Component } from 'react';
import logo from './logo.svg';
import './footer.css';

class Footer extends Component {
	render() {
		return (
      <div className="footer">
        <h2>Made with React</h2>
        <img src={logo} className="React-logo" alt="logo" />
      </div>
		)
	}
}

export default Footer;