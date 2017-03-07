import React, { Component } from 'react';

class ProjectPic extends Component {
	render() {
		const flexItemStyle = {

		}
		const overlayStyle = {

		}
		const overlayHoverStyle = {

		}
		const customH2 = {

		}
		const customP = {
			
		}
		return (
			<div className="flex-item flex-item-1">
				<div className="overlay">
					<a href="https://github.com/JSumulong/Congo_Directory"></a>
					<h2>{this.props.title}</h2>
					<p>{this.props.description}</p>
				</div>
			</div>
		)
	}
}

export default ProjectPic;