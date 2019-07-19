import React from 'react';
import './about.css';
import AboutCard from './about-card';
import Programmer from '../../assets/programmer.jpg';

class About extends React.Component {
	render() {
		return (
			<section className="about">
				<h1>ABOUT</h1>
				<AboutCard 
				title="Who Am I" 
				src={Programmer }
				>
					A Software Engineer specializing in all things JavaScript, its Libraries, and Frameworks to create a faster, more dynamic and interactive user experience.
					Fascinated by the power of creativity, I strive to create elegant and clean user interfaces. 
					As I am always learning, and looking for ways to improve, I follow Jake Archibald, a Google Developer, who writes excellent blogs about best practices and new features. 

				</AboutCard>
				<AboutCard 
				title="My Accomplishments" 
				src={Programmer }
				>
					My main accomplishment was learning how to code. As a self taught programmer, there is no one
					behind you making sure that you're doing what you need to do to be successful. This has taught me perseverance, patience,
					and a strong work ethic. 
				</AboutCard>
				<AboutCard 
				title="My Interests" 
				src={Programmer }
				>
					There are too may aspects of the web, and programming that excicte me, but the main ones have to do with React.js and Node.js. Most recently the 3D world has grabbed a hold of me, and I am in awe of Three.js/WebGl and its capabilities.
					I aim to interweave this new Library with my work to add life into my projects.
				</AboutCard>
			</section>
		)
	}
}

export default About;