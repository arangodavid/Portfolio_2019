import React from 'react';
import './thanos.css';

class Thanos extends React.Component {
	render() {
		return (
			<section className="thanos_root">
				<section className="thanos_inner">
					<section className="thanos thanos_top">
						<section className="thanos_finger_index">
							<section className="thannos_finger_index_inner"></section>
							<section className="thannos_finger_index_inner"></section>
							<section className="thannos_finger_index_inner"></section>
							<section className="thannos_finger_index_inner"></section>
						</section>
						<section className="thanos_finger_middle_cont">
							<section className="thanos_finger_middle">
								<section className="thannos_finger_middle_inner"></section>
								<section className="thannos_finger_middle_inner"></section>
								<section className="thannos_finger_middle_inner"></section>
								<section className="thannos_finger_middle_inner"></section>
							</section>
						</section>
					</section>
					<section className="thanos thanos_middle">
						<section className="thanos_finger_thumb">
							<section className="thannos_finger_thumb_inner"></section>
							<section className="thannos_finger_thumb_inner"></section>
							<section className="thannos_finger_thumb_inner"></section>
							<section className="thannos_finger_thumb_inner"></section>
						</section>
					</section>
					<section className="thanos thanos_bottom"></section>
				</section>
			</section>
		)
	}
}
export default Thanos;