import React from 'react';
import AboutCards from './about-cards';
import Programmer from '../../assets/programmer.jpg';

const attributes = {
	srcs: {
		srcOne: {
			src: Programmer,
			desc: 'Software Engineer writing on a whiteboard'
		}
	},
	titles: {
		titleOne: "Who Am I",
		titleTwo: "My Accomplishments",
		titleThree: "My Interests"
	}
}

class About extends React.Component {
	animate() {
		let envelopes = document.querySelectorAll('.about_card__img');
		for(let [i, envelope] of envelopes.entries()) {
			envelope.className += " envelope-isActive";
			envelope.style.animationDelay = i * 3 + "s";
		}
	}
	checkViewport() {
		let winSize = window.matchMedia('(max-width: 800px)');
		if(winSize.matches) this.animate();
	}
	componentDidMount() {
		this.checkViewport();
	}
	render() {
		return (
			<AboutCards attributes={attributes}/>
		);
	}
}

export default About;