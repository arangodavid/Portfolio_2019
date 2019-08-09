import React from 'react';
import Laptop from '../laptop/laptop';

const Desk = () => {
	return (
		<section className="desk_cont">
			<section className="desk">
				<Laptop />
				<section className="desk_leg desk_leg_left"></section>
				<section className="desk_leg desk_leg_right"></section>
			</section>
		</section>
	)
}

export default Desk;