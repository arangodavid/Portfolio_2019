import React from 'react';

const AboutCard = props => {
	return (
		<section className="about_card">
			<section className="about_card__cont_img">
				<img className="about_card__img" src={props.src} alt={props.desc} />
			</section>
			<section className="about_card_envelope">
				<h2 className="about_card__tittle">{props.title}</h2>
				<p className="about_card__desc">{props.children}</p>
			</section>
		</section>
	); 
}

export default AboutCard;