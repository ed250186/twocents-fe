import { hasErrored, loadingComplete, grabCurrentRecsSearchResults } from '../src/actions';

export const getAllRecommendations = async () => {
  return await fetch('https://twocents-be.herokuapp.com/api/v1/users/recommendations')
    .then(res => res.json())
    .then(data => data)
}

export const searchRecommendations = async searchValue => {
  return await fetch(`https://twocents-be.herokuapp.com/api/v1/search/recommendations_search?q=${searchValue}`)
  .then(response => {
    if (!response.ok) {
      return error => this.props.hasErrored(error.message);
    } else {
      return response.json();
    }
  })
  .then(recs => recs)
  .then(() => this.props.loadingComplete())
  .catch(error => this.props.hasErrored(error.message));
}

export const fetchSearchYelpLatLong = async (name, lat, long) => {
  await fetch(`https://twocents-be.herokuapp.com/api/v1/search/yelp_search/?term=${name}&latitude=${lat}&longitude=${long}`)
    .then(response => {
      if(!response.ok) {
        return error => this.props.hasErrored(error.message);
      } else {
        return response.json()
      }
    })
    .then(recs => recs.businesses)
    .then(() => this.props.loadingComplete())
    .catch(error => this.props.hasErrored(error.message))
}