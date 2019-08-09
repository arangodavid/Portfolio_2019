import React from 'react';
import ActiveText from '../active-text/active-text';
const ClippedText = props => {
	return (
		<section>
			<h1 className="clipped_text" data-name="David Arango">
				David Arango
			</h1>
			<ActiveText phrases={["Programmer", "Thinker", "Problem Solver"]} />
		</section>
	)
}

export default ClippedText;