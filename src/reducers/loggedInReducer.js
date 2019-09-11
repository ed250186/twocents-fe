
export const loggedInReducer = (state = {}, action) => {
  switch(action.type) {
    case 'IS_LOGGED_IN':
      return action.user;
    default:
      return state;
  }
}