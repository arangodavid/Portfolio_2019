import React from 'react';
import ClippedText from '../animations/clipped-text/clipped-text';
import ActiveText from '../animations/active-text/active-text';
import Desk from '../animations/desk/desk';

const Room = () => {
	return (
		<section className="room_cont">
			<section className="room">
				<section className="room_wall wall_back">
					<ClippedText />
					<Desk />
				</section>
				<section className="room_wall wall_top">

				</section>
				<section className="room_wall wall_bottom"></section>
			</section>
		</section>
	)
}

export default Room;