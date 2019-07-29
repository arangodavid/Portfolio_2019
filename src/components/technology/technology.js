import React from 'react';
import TechnologyBlocks from './technology-blocks';

const titles = {
	titleOne: "HTML",
	titleTwo: "CSS",
	titleThree: "JS"
}

class Technologies extends React.Component {
	animate() {
		let rectangles = document.querySelectorAll('.rectangle');
		for(let [i, rect] of rectangles.entries()) {
			rect.className += " rectangle-isActive";
			rect.style.animationDelay = i * 3 + "s";
		}
		
	}
	checkViewport() {
		const winSize = window.matchMedia('(max-width: 800px)');
		if(winSize.matches) this.animate();
	}

	componentDidMount() {
		this.checkViewport();
	}
	render() {
		return (
			<TechnologyBlocks titles={titles}/>
		);
	}
}

export default Technologies;