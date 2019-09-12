import { getAllRecommendations } from './APICalls'


describe('APICalls', () => {
  const method = {
    method: 'GET',
    headers:{'Accept': 'application/json'}
  }

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data)
    }))
  })

  it('should be called with 1 time', () => {
    const key = 'batman'
    const url = 'https://twocents-be.herokuapp.com/api/v1/users/recommendations/batman'
    getAllRecommendations(key)
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })

})