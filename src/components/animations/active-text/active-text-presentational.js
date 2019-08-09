import React from 'react';

const ActiveTextPresentational = props => {
	return (
		<section className="active_text">
			<span className="active_text_phrases">
				{props.currentPhrase}
				<span className="active_text_indicator">|</span>
			</span>
		</section>		
	);
}

export default ActiveTextPresentational;