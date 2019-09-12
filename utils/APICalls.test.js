import { getAllRecommendations } from './APICalls'


describe('APICalls', () => {
  const key = 'batman'
  const method = {
    method: 'GET',
    headers:{'Accept': 'application/json'}
  }
  const data = {test: 'test data'}

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data)
    }))
  })

  it('should be called with 1 time', () => {
    const url = 'https://twocents-be.herokuapp.com/api/v1/users/recommendations/batman'
    getAllRecommendations(key)
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith(url)
  })

  it('fetch should return a data object', async () => {
    expect(await getAllRecommendations(key)).toEqual(data)
  })

  it('should throw ok.false error', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(getAllRecommendations(key)).rejects.toEqual(Error('Error'))
  })

})