import { combineReducers } from 'redux';
import add from './add';
import neww from './neww';

const rootReducer = combineReducers({
  add,
  neww,
});

export default rootReducer;
