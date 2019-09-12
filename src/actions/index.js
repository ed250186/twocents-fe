
export const isLoggedIn = user => ({
  type: 'IS_LOGGED_IN',
  user
})

export const updateRecommendations = (recommendation) => ({
  type: 'UPDATE_RECOMMENDATIONS',
  payload: recommendation
})

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

export const getUserLocation = location => ({
  type: 'GET_USER_LOCATION',
  location
})