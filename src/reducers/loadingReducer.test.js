import { loadingReducer } from './loadingReducer';

describe('loadingReducer', () => {
  it('should return the initial state', () => {
    const expected = true;
    const result = loadingReducer(undefined, true)
    expect(result).toEqual(expected) 
  })

  it('should stop loading', () => {
    const action = {
      type: 'LOADING_COMPLETE'
    }
    const expected = false;
    const result = loadingReducer(undefined, action);
    expect(result).toEqual(expected)
  })

})