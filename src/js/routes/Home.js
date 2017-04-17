import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as scoreActions from '../actions/scoreActionCreator';

const Home = (props) => {

	function setScore(score, id) {

		props.actions.setScore(score, id);

	}

	function incScore(score, id) {

		props.actions.incrementScore(score, id);

	}
	console.log('props', props.scores);

	return (
		<div>
			<h2>Home</h2>
			<ul>
		{
			props.scores.map((item) => {
					return <li key={ item.uid }>{ item.name } : { item.score }
					<button onClick={setScore.bind(null, 20, item.uid)}>set score</button>
						<button onClick={incScore.bind(null, 20, item.uid)}>incr score</button> </li>
			})
		}
			</ul>
		</div>

	);
};

function mSTP(state, ownProps) {

	console.log('mSTP', state, ownProps);

	return {
		scores : state.scores
	};

}

function mDTP(dispatch) {

	return {
		// setScore : (scores, user) => {
		//   dispatch(setScore(scores, user))
		// }
		actions : bindActionCreators(scoreActions, dispatch)
	};

}

export default connect(mSTP, mDTP)(Home);
