

export const getAllRecommendations = async (key) => {
  return await fetch(`https://twocents-be.herokuapp.com/api/v1/users/recommendations/${key}`)
    .then(res => res.json())
    .then(data => data)
}
