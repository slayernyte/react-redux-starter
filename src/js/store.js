import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, {scores : [{
  name : 'amber',
  uid : 0,
  score : 7
},{
  name : 'schris',
  uid : 1,
  score : 10
}]});

export default store;
