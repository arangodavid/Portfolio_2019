import React from 'react';

class AboutCard extends React.Component {
	render() {
		return (
			<section className="about_card">
				<section className="about_card__cont_img">
					<img className="about_card__img" src={this.props.src} alt={this.props.desc} />
				</section>
				<section className="about_card_envelope">
					<h2 className="about_card__tittle">{this.props.title}</h2>
					<p className="about_card__desc">{this.props.children}</p>
				</section>
			</section>
		) 
	}
}

export default AboutCard;