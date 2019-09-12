import { loggedInReducer } from './loggedInReducer';

describe('loggedInReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = loggedInReducer(undefined, {})
    expect(result).toEqual(expected) 
  })

  it('should log in a user', () => {
    const action = {
      type: 'IS_LOGGED_IN',
      user: {
        isLoggedIn: true,
        name: 'Emily',
        email: 'emily@email.com',
        ImageUrl: 'picture',
        key: 12345
      }
    }

    const expected = {
      isLoggedIn: true,
      name: 'Emily',
      email: 'emily@email.com',
      ImageUrl: 'picture',
      key: 12345
    }
    const result = loggedInReducer(undefined, action);
    expect(result).toEqual(expected)
  })
})