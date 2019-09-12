import { errorReducer } from './errorReducer'

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, '')
    expect(result).toEqual(expected) 
  })

  it('should set an error to state', () => {
    const action = {
      type: 'HAS_ERRORED',
      message: 'Error'
    }

    const expected = 'Error'
    const result = errorReducer(undefined, action);
    expect(result).toEqual(expected)
  })

  it('should clear the error message', () => {
    const action = {
      type: 'CLEAR_ERROR',
      message: ''
    }

    const expected = ''
    const result = errorReducer(undefined, action);
    expect(result).toEqual(expected)
  })
})