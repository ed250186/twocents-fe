
export const getAllRecommendations = async () => {
  return await fetch('https://twocents-be.herokuapp.com/api/v1/users/recommendations')
    .then(res => res.json())
    .then(data => data)
}