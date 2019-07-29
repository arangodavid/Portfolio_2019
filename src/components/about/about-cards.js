import React from 'react';
import AboutCard from './about-card';

const AboutCards = props => {
	return (
		<section className="about_cont">
			<AboutCard 
			title={props.attributes.titles.titleOne} 
			src={props.attributes.srcs.srcOne.src}
			desc={props.attributes.srcs.srcOne.desc}
			>
				A Software Engineer specializing in all things JavaScript, its Libraries, and Frameworks to create a faster, more dynamic and interactive user experience.
				Fascinated by the power of creativity, I strive to create elegant and clean user interfaces. 
				I am always learning, and looking for ways to improve.

			</AboutCard>
			<AboutCard 
			title={props.attributes.titles.titleTwo}
			src={props.attributes.srcs.srcOne.src}
			desc={props.attributes.srcs.srcOne.desc}
			>
				My main accomplishment was learning how to code. As a self taught programmer, there is no one
				behind you making sure that you're doing what you need to do to be successful. This has taught me perseverance, patience,
				and a strong work ethic. 
			</AboutCard>
			<AboutCard 
			title={props.attributes.titles.titleThree}
			src={props.attributes.srcs.srcOne.src}
			desc={props.attributes.srcs.srcOne.desc}
			>
				I am attracted to CSS animations and creating a visually rich UX/UI. Most recently the 3D world has grabbed a hold of me, and I am in awe of Three.js/WebGl and its capabilities.
				I aim to interweave this new Library with my work to add life into my projects.
			</AboutCard>
		</section>
	)
}

export default AboutCards;