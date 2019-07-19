import React from 'react';
import './hobby.css';

class Hobby extends React.Component {
	render() {
		return (
			<section className="rectangle_cont">
				<section className="rectangle">
					<section class="face front">Front</section>
					<section class="face left"></section>
					<section class="face right">Right</section>
					<section class="face back"></section>
				</section>
			</section>
		);
	}
}

export default Hobby;