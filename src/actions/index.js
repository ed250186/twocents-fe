
export const isLoggedIn = (boolean) => ({
  type: 'IS_LOGGED_IN',
  payload: boolean
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