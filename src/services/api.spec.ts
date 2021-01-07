import api from './api'


describe('Services Tests', () => {
  it('should be able to an API can be initialized', () => {
    expect(api).toBeTruthy();
  });
  it('should be able to find a correctly baseURL', () => {
    expect(api.defaults.baseURL).toEqual('https://5fea108e8ede8b0017ff14fe.mockapi.io');
  });
});

