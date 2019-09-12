

export const getAllRecommendations = async (key) => {
  return await fetch(`https://twocents-be.herokuapp.com/api/v1/users/recommendations/${key}`)
    .then(res => {
      if(res.ok) {
        return res.json()
      } else { throw Error('Error')}
    })
    .then(data => data)
}

export const addRecommendation = async (userKey, yelpId) => {
  console.log(userKey,'    some stuff    ', yelpId)
  const method = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }
  return await fetch(`https://twocents-be.herokuapp.com/api/v1/users/recommendations/${userKey}?yelpId=${yelpId}`, method)
    .then(res => console.log(res))
}

export const removeRecommendation = async (userKey, yelpId) => {
  const method = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  }
  return await fetch(`https://twocents-be.herokuapp.com/api/v1/users/recommendations/${userKey}?yelpId=${yelpId}`, method)
    .then(res => console.log(res))
}