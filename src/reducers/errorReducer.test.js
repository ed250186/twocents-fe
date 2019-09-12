import errorReducer from './errorReducer'

describe('ErrorReducer', () => {
  it('Should return default state', () => {
    const mockState = undefined;
    const expected = '';
    const result = ErrorReducer(mockState, {})

    expect(result).toEqual(expected)
  })
  it('Should return error message when action type is HAS ERRORED', () => {
    const mockAction = {
      type: 'HAS ERRORED',
      error: 'Mock error message'
    }
    const expected = 'Mock error message'
    const result = ErrorReducer('', mockAction)
    
    expect(result).toEqual(expected)
  })
})