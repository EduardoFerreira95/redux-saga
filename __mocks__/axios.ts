export default {
  get: jest.fn(() => Promise.resolve({})),
  post: jest.fn(() => Promise.resolve({})),
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({})),
    put: jest.fn(() => Promise.resolve({})),
    delete: jest.fn(() => Promise.resolve({})),
    post: jest.fn(() => Promise.resolve({})),
    interceptors: {
      request: {
        use: jest.fn(),
        eject: jest.fn(),
      },
      response: {
        use: jest.fn(),
        eject: jest.fn(),
      },
    },
  })),
  CancelToken: {
    source: jest.fn(() => ({
      token: '',
      cancel: false,
    })),
  },
};
