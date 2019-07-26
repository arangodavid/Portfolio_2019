import React from 'react';
import Hobby from './hobby';
import Snowboarding from '../../assets/snowboarding-three.svg';
import Nature from '../../assets/tree.svg';
import Car from '../../assets/car.svg';

class Hobbies extends React.Component {
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
			<section className="hobbies">
				<Hobby 
				logo={Snowboarding} 
				desc="Man on a snowboard"
				title="HTML"
				>
					The first language that I learned, the one that started it all... 
				</Hobby>
				<Hobby 
				logo={Nature} 
				desc="Nature"
				title="CSS"
				>
					I enjoy writing this language with its preprocessor SCSS to add flare, modularity and complexity to the cascading style sheet
				</Hobby>
				<Hobby 
				logo={Car} 
				desc="Motor Vehicle"
				title="JS"
				>
					The language that solves it all, without JavaScript the web would have no ligaments, and an inability to move.
				</Hobby>
			</section>
		)
	}
}

export default Hobbies;