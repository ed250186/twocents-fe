export const ErrorReducer = (state='', action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.message
    case 'CLEAR_MESSAGE':
      return ''
    default:
      return state
  }
}