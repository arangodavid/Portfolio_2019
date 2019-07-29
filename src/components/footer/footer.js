import React from 'react';
import FooterIcon from './footer-icons';

const Footer = () => {
	return (
		<footer className="footer">
			<FooterIcon />
			<section className="footer_notes">
				<p className="footer_notes_p">Made from scratch with React.js</p>
				<p className="footer_notes_p">&copy; 2019 David Arango Portfolio. All rights reserved.</p>
			</section>
		</footer>
	);
}

export default Footer;