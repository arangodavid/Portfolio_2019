import React from 'react';
import asteroid from '../../../assets/asteroid.svg';

class Asteroid extends React.Component {
	render() {
		return (
			<section className="asteroid_cont">
				<figure className="asteroid">
					<img className="asteroid_img asteroid_first" src={asteroid} alt="Asteroid"/>
				</figure>
				<figure className="asteroid">
					<img className="asteroid_img asteroid_second" src={asteroid} alt="Asteroid"/>
				</figure>
				<figure className="asteroid">
					<img className="asteroid_img asteroid_third" src={asteroid} alt="Asteroid"/>
				</figure>
				<figure className="asteroid">
					<img className="asteroid_img asteroid_fourth" src={asteroid} alt="Asteroid"/>
				</figure>
				<figure className="asteroid">
					<img className="asteroid_img asteroid_fith" src={asteroid} alt="Asteroid"/>
				</figure>
			</section>
		)
	}
}

export default Asteroid;