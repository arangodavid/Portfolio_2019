import React from 'react';
import ActiveTextPresentational from './active-text-presentational';

class ActiveText extends React.Component {
	constructor(props) {
		super(props);
		this.phrases = this.props.phrases;
		this.state = {phrase: '', phraseCount: 0};
	}
	nextPhrase() {
		if(this.state.phraseCount >= this.phrases.length - 1) {
			this.setState({phraseCount: 0});
			this.start(this.phrases[this.state.phraseCount]);
		}else {
			this.setState({phraseCount: this.state.phraseCount + 1});
			this.start(this.phrases[this.state.phraseCount]);
		}
	}
	removePhrase(phrase, i) {
		setTimeout(() => {
			let updatedPhrase = phrase.substring(0, this.state.phrase.length - 1);
			this.setState({phrase: updatedPhrase});

			if(this.state.phrase.length === 0) {
				setTimeout(() => {
					this.nextPhrase();
				}, 2000);
			}		
		}, 150 * i);
	}
	checkPhrase(phrase) {
		if(phrase.length === this.state.phrase.length) {
			setTimeout(() => {
				for(let i = 0; i < phrase.length; i++) {
					this.removePhrase(phrase, i);
				}
			}, 1500)
		}
	}
	setPhrase(phrase, i) {
		setTimeout(() => {
			let current = phrase.charAt(i);
			this.setState({phrase: this.state.phrase + current});
			this.checkPhrase(phrase);
		}, 150 * i);					
	}
	start(phrase) {
		for(let i = 0; i < phrase.length; i++) {
			this.setPhrase(phrase, i);
		}
	}
	componentDidMount() {
		this.start(this.phrases[this.state.phraseCount]);
	}

	render() {
		return (
			<ActiveTextPresentational 
			welcomeText={this.props.children[0]} 
			nameText={this.props.children[1]} 
			currentPhrase={this.state.phrase}
			/>
		);
	}
}

export default ActiveText;









