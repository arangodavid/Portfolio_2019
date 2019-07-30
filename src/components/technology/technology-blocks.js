import React from 'react';
import TechnologyBlock from './technology-block';

const TechnologyBlocks = props => {
	return(
		<section className="technology_blocks">
			<TechnologyBlock 
			title={props.titles.titleOne}
			>
				The first language that I learned, the one that started it all... 
			</TechnologyBlock>
			<TechnologyBlock 
			title={props.titles.titleTwo}
			>
				I enjoy writing this language with its preprocessor SCSS to add flare, modularity and complexity to the cascading style sheet
			</TechnologyBlock>
			<TechnologyBlock  
			title={props.titles.titleThree}
			>
				The language that solves it all, without JavaScript the web would have no ligaments, and an inability to move.
			</TechnologyBlock>
		</section>
	);
}
export default TechnologyBlocks;