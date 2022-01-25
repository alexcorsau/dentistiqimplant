import pathReducer from './pathReducer';
import selectReducer from './selectReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({ pathReducer, selectReducer });

export default reducers;
