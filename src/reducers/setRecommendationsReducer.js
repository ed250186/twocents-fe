export const setRecommendationsReducer = (state = [], action) => {
  switch(action.type) {
    case 'RECOMMENDATIONS':
      return action.payload;
    case 'UPDATE_RECOMMENDATIONS':
      return action.payload;
    default:
      return state;
  }
}