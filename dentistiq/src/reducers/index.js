import pathReducer from './pathReducer';
import selectReducer from './selectReducer';
import serviciiReducer from './serviciiReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  pathReducer,
  selectReducer,
  serviciiReducer,
});

export default reducers;
