import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import productSaga from './modules/rootSaga';
import reducers from './modules/products/reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(productSaga);

export default store;
