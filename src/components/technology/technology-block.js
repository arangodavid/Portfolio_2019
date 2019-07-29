import React from 'react';

const TechnologyBlock = props => {
	return (
		<section className="rectangle_cont">
			<section className="rectangle">
				<section className="face front">
					<section className="rectangle_logo">
						{props.title}
					</section>
					<section className="rectangle_footer">
						<figure className="rectangle_footer__img"></figure>
					</section>
				</section>
				<section className="face left"></section>
				<section className="face right">
					<p className="rectangle_desc">{props.children}</p>
					<section className="rectangle_footer">
						<figure className="rectangle_footer__img"></figure>
					</section>
				</section>
				<section className="face back"></section>
				<section className="face bottom reactangle_inactive"></section>
			</section>
		</section>
	);
}
export default TechnologyBlock;