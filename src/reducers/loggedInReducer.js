
export const loggedInReducer = (state = false, action) => {
  switch(action) {
    case 'IS_LOGGED_IN':
      return action.payload;
    default:
      return state;
  }
}