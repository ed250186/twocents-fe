
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

export const loadingComplete = () => ({
  type: 'LOADING_COMPLETE'
})

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})

export const clearError = () => ({
  type: 'CLEAR_MESSAGE'
})