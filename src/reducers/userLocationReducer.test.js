import { userLocationReducer } from './userLocationReducer';

describe('userLocationReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = userLocationReducer(undefined, [])
    expect(result).toEqual(expected) 
  })
})