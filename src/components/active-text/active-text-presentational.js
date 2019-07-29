import React from 'react';

const ActiveTextPresentational = props => {
	return (
		<section className="active_text">
			<section className="active_text__welcome">{props.welcomeText}</section>
			<section className="active_text__name">{props.nameText}</section>
			<section className="active_text__phrases__cont">
				<span className="active_text__pre_phrases">I am a </span>
				<span className="active_text__phrases">{props.currentPhrase}
					<span className="active_text__indicator">|</span>
				</span>
			</section>
		</section>		
	);
}

export default ActiveTextPresentational;