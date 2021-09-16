import React from 'react';
import { connect } from 'react-redux';

class TweetsList extends React.Component {
	render() {
		return (
			<div>
				<h1>Tweets List</h1>
			</div>
		);
	}
}

export default connect()(TweetsList);
