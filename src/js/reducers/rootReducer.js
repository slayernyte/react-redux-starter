import { combineReducers } from 'redux';
import scores from './scoresReducer';

const rootReducer = combineReducers({
  scores
});

export default rootReducer;
