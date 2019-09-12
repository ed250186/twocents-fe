import { loggedInReducer } from './loggedInReducer';

describe('loggedInReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = loggedInReducer(undefined, {})
    expect(result).toEqual(expected) 
  })
})