import * as actions from './index';

describe('actions', () => {
  it('should have a type of IS_LOGGED_IN', () => {
    const user = {
      loggedIn: true,
      name: 'Emily',
      email: 'emily@email.com',
      photoUrl: 'url',
      key: 12345
    };
    const expectedAction = {
      type: 'IS_LOGGED_IN',
      user: user
    };

    const result = actions.isLoggedIn(user);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of UPDATE_RECOMMENDATIONS', () => {
    const recommendation = [
      {
        location: 'Little Owl'
      }
    ];
    const expectedAction = {
      type: 'UPDATE_RECOMMENDATIONS',
      payload: recommendation
    };

    const result = actions.updateRecommendations(recommendation);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of RECOMMENDATIONS', () => {
    const recommendation = [
      {
        location: 'Little Owl'
      }
    ];
    const expectedAction = {
      type: 'RECOMMENDATIONS',
      payload: recommendation
    };

    const result = actions.setRecommendations(recommendation);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOADING_COMPLETE', () => {

    const expectedAction = {
      type: 'LOADING_COMPLETE',
    };

    const result = actions.loadingComplete();

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of HAS_ERRORED', () => {

    const message='Error has occurred'

    const expectedAction = {
      type: 'HAS_ERRORED',
      message
    };

    const result = actions.hasErrored(message);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of CLEAR_MESSAGE', () => {

    const expectedAction = {
      type: 'CLEAR_MESSAGE',
    };

    const result = actions.clearError();

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of GET_USER_LOCATION', () => {

    const location = [{lat: 1, long: 2}]

    const expectedAction = {
      type: 'GET_USER_LOCATION',
      location
    };

    const result = actions.getUserLocation(location);

    expect(result).toEqual(expectedAction);
  })
})