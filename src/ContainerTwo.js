import React, { Component } from 'react';
import './containerTwo.css';

class ContainerTwo extends Component {
	render() {
		return (
			<div className="container-two">
				<h1 className="h1-media">ABOUT ME</h1>
				<div className="container-AboutMe">
					<p className="p-media">I'm a Web Developer with a passion for learning. 
					I get excited about new technology, programming, 
					collaborating with others, cool tutorials, and 
					listening to different perspectives. When I'm not 
					coding, I enjoy playing racquetball and making 
					calzones. I'm currently looking for new opportunities 
					as a web developer and enjoying the opportunity to 
					teach myself more about programming.</p>
					<p className="p-media">Feel free to contact me: sumulong.jon@gmail.com</p>
				</div>
			</div>
		)
	}
}

export default ContainerTwo;