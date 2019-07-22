import React from 'react';
import './active-text.css';

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
				console.log('Phrase Removed');
				setTimeout(() => {
					this.nextPhrase();
				}, 2000);
			}		
		}, 150 * i);
	}
	checkPhrase(phrase) {
		if(phrase.length === this.state.phrase.length) {
			console.log('Phrase Added');
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
			<section className="active_text">
					<section className="active_text__welcome">{this.props.children[0]}</section>
					<section className="active_text__name">{this.props.children[1]}</section>
					<section className="active_text__phrases__cont">
						<span className="active_text__pre_phrases">I am a </span>
						<span className="active_text__phrases">{this.state.phrase}
							<span className="active_text__indicator">|</span>
						</span>
					</section>
			</section>
		)
	}
}

export default ActiveText;









