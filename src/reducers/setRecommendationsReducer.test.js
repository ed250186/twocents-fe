import { setRecommendationsReducer } from './setRecommendationsReducer';

describe('setRecommendationsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = setRecommendationsReducer(undefined, [])
    expect(result).toEqual(expected) 
  })
})