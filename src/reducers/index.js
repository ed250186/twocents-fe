import { combineReducers } from 'redux';
import { loggedInReducer } from './loggedInReducer';
import { setRecommendationsReducer } from './setRecommendationsReducer'
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  allRecommendations: setRecommendationsReducer,
  loading: loadingReducer,
  error: errorReducer
})