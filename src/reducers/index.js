import { combineReducers } from 'redux';
import { loggedInReducer } from './loggedInReducer';
import { setRecommendationsReducer } from './setRecommendationsReducer'

const test1 = () => {
  switch('') {
    default: 
      return('hello')
  }
}

export const rootReducer = combineReducers({
  test: test1,
  loggedIn: loggedInReducer,
  allRecommendations: setRecommendationsReducer
})