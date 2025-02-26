import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';
import { Redirect } from 'react-router-dom';

class NewTweet extends Component {
	state = {
		text: '',
		toHome: false
	};
	handleChange = (e) => {
		const text = e.target.value;
		this.setState(() => ({
			text
		}));
	};
	handleSubmit = (e) => {
		e.preventDefault();

		const {text} = this.state;
		const {dispatch, id} = this.props;

		dispatch(handleAddTweet(text, id));


		this.setState(() => ({
			text: '',
			toHome: !id
		}));
	};

	render() {
		const {text, toHome} = this.state;
		if ( toHome === true ) {
			return <Redirect to='/' />;
		}
		const tweetLeft = 280 - text.length;
		return (
			<div>
				<h3 className='center'>Compose New Tweet</h3>
				<form onSubmit={this.handleSubmit} className='new-tweet'>
					<textarea
						onChange={this.handleChange}
						name='New Tweet'
						placeholder="What's Happening"
						value={text}
						className='textarea'
					/>
					{tweetLeft <= 100 && (
						<div className='tweet-length'>{tweetLeft}</div>
					)}
					<button className='btn' type='submit' disabled={text === ''}>Submit</button>
				</form>
			</div>
		);
	}
}

export default connect()(NewTweet);
