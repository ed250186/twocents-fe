import { loadingReducer } from './loadingReducer';

describe('loadingReducer', () => {
  it('should return the initial state', () => {
    const expected = true;
    const result = loadingReducer(undefined, true)
    expect(result).toEqual(expected) 
  })

})