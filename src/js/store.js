import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const DEFAULT_STATE = {
	scores : [
		{
			name : 'amber',
			uid : 0,
			score : 7
		},
		{
			name : 'schris',
			uid : 1,
			score : 10
		}
	]
};

const store = createStore(rootReducer, DEFAULT_STATE);

export default store;
