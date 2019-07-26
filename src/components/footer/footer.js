import React from 'react';
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import codepen from "../../assets/codepen.svg";

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<ul className="social_icon_cont">
					<li className="social_icon"><a className="social_icon_link" href="" target="_blank"><img src={linkedin} alt="Linkedin Icon"/></a></li>
					<li className="social_icon"><a className="social_icon_link" href="" target="_blank"><img src={github} alt="Github Icon"/></a></li>
					<li className="social_icon"><a className="social_icon_link" href="" target="_blank"><img src={codepen} alt="Codepen Icon"/></a></li>
				</ul>
				<section className="footer_notes">
					<p className="footer_notes_p">Made from scratch with React.js</p>
					<p className="footer_notes_p">&copy; 2019 David Arango Portfolio. All rights reserved.</p>
				</section>
			</footer>
		)
	}
}

export default Footer;