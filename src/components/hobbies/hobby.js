import React from 'react';

class Hobby extends React.Component {
	constructor(props) {
		super(props);
		this.bgColor = {
			background: this.props.bgColor
		};
		this.footerImg = {
			background: `url(${this.props.footerImg}) repeat-x`,
			backgroundPosition: "center",
			backgroundSize: "contain"
		};
	}
	render() {
		return (
			<section className="rectangle_cont">
				<section className="rectangle">
					<section style={this.bgColor} className="face front">
						<figure className="rectangle_logo__cont">
							<img className="rectangle_logo" src={this.props.logo} alt={this.props.desc} />
						</figure>
						<h3 className="rectangle_title">{this.props.title}</h3>
						<section className="rectangle_footer">
							<figure style={this.footerImg} className="rectangle_footer__img"></figure>
						</section>
					</section>
					<section className="face left"></section>
					<section style={this.bgColor} className="face right">
						<p className="rectangle_desc">{this.props.children}</p>
						<section className="rectangle_footer">
							<figure style={this.footerImg} className="rectangle_footer__img"></figure>
						</section>
					</section>
					<section className="face back"></section>
					<section className="face bottom reactangle_inactive"></section>
				</section>
			</section>
		);
	}
}

export default Hobby;