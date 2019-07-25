import React from 'react';

class Parallax extends React.Component {
	constructor(props) {
		super(props);
		this.backgroundImg = {
			background: `url(${this.props.src}) no-repeat`,
			backgroundAttachment: 'fixed',
			backgroundPosition: 'center',
			backgroundSize: 'cover'
		}
	}

	render() {
		return (
			<section className="parallax"></section>
		)
	}
}

export default Parallax;