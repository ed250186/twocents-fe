import { setRecommendationsReducer } from './setRecommendationsReducer';

describe('setRecommendationsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = setRecommendationsReducer(undefined, [])
    expect(result).toEqual(expected) 
  })

  it('should get all the recommendations', () => {
    const action = {
      type: 'RECOMMENDATIONS',
      payload:[
        {name: 'Little Owl'}
      ]
    }

    const expected = [{
      name: 'Little Owl'
    }]
    const result = setRecommendationsReducer(undefined, action);
    expect(result).toEqual(expected)
  })
  it('should update the recommendations', () => {
    const action = {
      type: 'UPDATE_RECOMMENDATIONS',
      payload:[
        {name: 'Little Owl'}
      ]
    }

    const expected = [{
      name: 'Little Owl'
    }]
    const result = setRecommendationsReducer(undefined, action);
    expect(result).toEqual(expected)
  })
})