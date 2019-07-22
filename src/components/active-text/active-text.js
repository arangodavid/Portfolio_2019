import React from 'react';
import './active-text.css';

class ActiveText extends React.Component {
	constructor(props) {
		super(props);
		this.phrases = this.props.phrases;
		this.state = {phrase: ''};
		this.test = 'programmer';
	}

	removePhrase(phrases, i) {
		setTimeout(() => {
			let phrase = phrases.substring(0, this.state.phrase.length - 1);
			this.setState({phrase: phrase});			
		}, 250 * i);
	}

	checkPhrase(phrases) {
		if(phrases.length === this.state.phrase.length) {
			console.log('done');
			setTimeout(() => {
				for(let i = 0; i < phrases.length; i++) {
					this.removePhrase(phrases, i);
				}
			}, 2000)
		}
	}

	setPhrase(phrases, i) {
		setTimeout(() => {
			let current = phrases.charAt(i);
			this.setState({phrase: this.state.phrase + current});
			this.checkPhrase(phrases);
		}, 250 * i);					
	}

	start(phrases) {
		for(let i = 0; i < phrases.length; i++) {
			this.setPhrase(phrases, i);
		}
	}

	componentDidMount() {
		this.start(this.phrases);
	}

	render() {
		return (
			<section>
				<p>{this.props.children} <span>{this.state.phrase}</span><span style={{color: 'red'}}>|</span></p>
			</section>
		)
	}
}

export default ActiveText;