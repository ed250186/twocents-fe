import { combineReducers } from 'redux';

const test1 = () => {
  switch('') {
    default: 
      return('hello')
  }
}
export const rootReducer = combineReducers({
  test: test1
})