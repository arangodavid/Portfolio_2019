import React from 'react';
import Hobby from './hobby';
import Snowboarding from '../../assets/snowboarding-three.svg';
import Nature from '../../assets/tree.svg';
import Car from '../../assets/car.svg';
import Mountains from '../../assets/mountains.jpg';
import Trees from '../../assets/tree-two.jpg';
import Mustang from '../../assets/car-seven.jpg';

class Hobbies extends React.Component {
	animate() {
		let rectangles = document.querySelectorAll('.rectangle');
		for(let rect of rectangles) {
			rect.className += " rectangle-isActive";
			rect.style.animationDelay = Math.floor(Math.random() * 6) + "s";
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
			<section>
				<h1>HOBBIES</h1>
				<section className="hobbies">
					<Hobby 
					bgColor="#338CB2" 
					logo={Snowboarding} 
					footerImg={Mountains} 
					desc="Man on a snowboard"
					title="Snowboarding"
					>
						I began snowboarding at the age of 13 and have been doing it every winter season since. It is a thrill like no other. 
					</Hobby>
					<Hobby 
					bgColor="linear-gradient(to bottom, #d1d8e0, #ffffff)" 
					logo={Nature} 
					footerImg={Trees} 
					desc="Nature"
					title="Nature"
					>
						I have always enjoyed the wilderness, and the fresh air it exhales. I often go hiking and mountain bike riding through forest trails.
					</Hobby>
					<Hobby 
					bgColor="linear-gradient(to bottom, #338CB2, #B2D6E7, #B2D6E7)" 
					logo={Car} 
					footerImg={Mustang} 
					desc="Motor Vehicle"
					title="Cars"
					>
						I was never much of a car guy, until I bought my very own. Since then it has opened many new doors and allowed me access to further away places. 
					</Hobby>
				</section>
			</section>
		)
	}
}

export default Hobbies;

					// <Hobby 
					// bgColor="linear-gradient(to bottom, #d1d8e0, #ffffff)" 
					// logo={Nature} 
					// footerImg={Trees} 
					// desc="Nature"
					// title="Nature"
					// >
					// 	I have always enjoyed the wilderness, and the fresh air it exhales. I often go hiking and mountain bike riding through forest trails.
					// </Hobby>
					// <Hobby 
					// bgColor="linear-gradient(to bottom, #338CB2, #B2D6E7, #B2D6E7)" 
					// logo={Car} 
					// footerImg={Mustang} 
					// desc="Motor Vehicle"
					// title="Cars"
					// >
					// 	I was never much of a car guy, until I bought my very own. Since then it has opened many new doors and allowed me access to further away places. 
					// </Hobby>