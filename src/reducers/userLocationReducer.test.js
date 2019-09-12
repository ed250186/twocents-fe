import { userLocationReducer } from './userLocationReducer';

describe('userLocationReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = userLocationReducer(undefined, [])
    expect(result).toEqual(expected) 
  })
  it('should return the user location', () => {
    const action = {
      type: 'GET_USER_LOCATION',
      location:[
        {latitude: 1},
        {longitude: 2}
      ]
    }

    const expected = [
      {latitude: 1},
      {longitude: 2}
    ]
    const result = userLocationReducer(undefined, action);
    expect(result).toEqual(expected)
  })
})