

export const getAllRecommendations = async (key) => {
  return await fetch(`https://twocents-be.herokuapp.com/api/v1/users/recommendations/${key}`)
    .then(res => {
      if(res.ok) {
        return res.json()
      } else { throw Error('Error')}
    })
    .then(data => data)
}
