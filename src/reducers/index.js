import { combineReducers } from 'redux';
import { loggedInReducer } from './loggedInReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  loading: loadingReducer,
  error: errorReducer
})