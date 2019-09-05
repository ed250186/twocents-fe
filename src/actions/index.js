
export const loggedIn = (boolean) => ({
  type: 'LOGGED_IN',
  payload: boolean
})

export const loggedOut = (boolean) => ({
  type: 'LOGGED_OUT',
  payload: boolean
})