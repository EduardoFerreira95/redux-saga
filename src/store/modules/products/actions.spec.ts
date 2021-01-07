import { createAction } from './actions';

describe('Redux Saga Actions Test', () => {
  it('should be able to create an action', () => {
    const expectedAction = {
      type: 'CREATE_ACTION_SAGA_TEST',
      payload: {
        test: 'JEST_TEST',
      },
    };

    expect(
      createAction<{test: string}>('CREATE_ACTION_SAGA_TEST')({ test: 'JEST_TEST' })
    ).toEqual(expectedAction);
  });
});
