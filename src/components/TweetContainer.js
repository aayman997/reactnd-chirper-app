import React from 'react';
import { connect } from 'react-redux';

class TweetContainer extends React.Component {
	render() {
		return (
			<div>
				<h1>Tweet Container</h1>
			</div>
		);
	}
}

export default connect()(TweetContainer);
