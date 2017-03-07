import React, { Component } from 'react';
import './containerFive.css';

class ContainerFive extends Component {
	render() {
		return (
			<div className="container-five">
				<div>
					<h1><b>Helpful Resources</b></h1>
				</div>
				<div className="resource-flex">
					<div className="flex-item flex-item-1">
						<a href="https://javascript30.com/">JavaScript30 (Free Tutorial)</a>
						<p>If you're going to be a web developer, you've gotta learn JavaScript. With so many JavaScript tools, libraries, and frameworks floating around it's easy to get overwhelmed. But before you pull your hair out trying to keep up with the latest and greatest that the JavaScript community has to offer, you should learn some plain ol vanilla JavaScript</p>
					</div>
					<div className="flex-item flex-item-2">
						<a href="http://flexboxfroggy.com/">Flexbox Froggy! (Free Tutorial)</a>
						<p>CSS can be fun. Don't believe me? Try this quick flexbox tutorial and bring the froggies home while picking up a new skill or flexing some CSS muscle.</p>
						<p>#ImFlexyAndIKnowIt</p>
						<p>#lillyPadSanctuary</p>
						<p>#bringThemHome</p>
						<p>#greenButNotMean</p>
						<p>#noButThatLastOneIsSeriouslyTough</p>
					</div>
					<div className="flex-item flex-item-3">
						<a href="https://techbeacon.com/agility-beyond-history%E2%80%94-legacy%E2%80%94-agile-development">To Agility and Beyond (Article)</a>
						<p>Agile development is almost ubiquitous these days. If you're a developer, you've heard of it, you've used it, and whether you love it or hate it, it has a pretty interesting history. Why not read up on early development methodologies and how the dominant paradigm has shifted in the relatively short history of computer programming?</p>
					</div>
					<div className="flex-item flex-item-4">
						<a href="https://frontendmasters.com/workshops/react-intro/">Complete Introduction to React (Paid)</a>
						<p>React is pretty popular and if you're not familiar with it, this is a solid intro, but it's not for the feint of heart. Implicit in the 'complete' introduction to React is a handful of pretty popular tools that are often paired with React such as: Redux, JSX, Babel, Webpack, React Router, Jest, and so on. It ain't free, but it's a pretty meaty course and you'll most likely find yourself having to review the material just to take it all in. Be warned!</p>
					</div>
					<div className="flex-item flex-item-5">
						<a href="https://www.youtube.com/watch?v=k7-N8R0-KY4">FunFunFun Recursion (Free Video Tutorial)</a>
						<p>Recursion can be confusing. This is a great video that explains the basics of how to approach thinking recursively and how it might be useful when solving problems. Oh yeah, and it's short. Take 15 minutes and invest in thinking recursively. Also, this video is part of a series that I would also recommend about functional programming.</p>
					</div>
					<div className="flex-item flex-item-6">
						<a href="http://www.poodr.com/">Practical Object Oriented Design in Ruby</a>
						<p>This is a great introduction to Object Oriented Design and because it's written in Ruby, it's even beautiful to read and easy to follow along. This book takes a practical approach to OO, so it focuses more on the <em>how</em>, than the why.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default ContainerFive;