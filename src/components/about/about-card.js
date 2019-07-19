import React from 'react';
import './about-card.css';

class AboutCard extends React.Component {
	render() {
		return (
			<section className="about_card">
				<img className="about_card__img" src={this.props.src} alt={this.props.desc} />
				<h2>{this.props.title}</h2>
				<p>{this.props.children}</p>
			</section>
		) 
	}
}

export default AboutCard;