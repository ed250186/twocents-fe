
export const isLoggedIn = (boolean) => ({
  type: 'IS_LOGGED_IN',
  payload: boolean
})

// export const loggedOut = (boolean) => ({
//   type: 'LOGGED_OUT',
//   payload: boolean
// })

export const setRecommendations = (recommendation) => ({
  type: 'RECOMMENDATIONS',
  payload: recommendation
})