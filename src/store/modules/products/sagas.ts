import { IPutSagaEffect } from './../../../types/saga.types';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import {
  onSucceededActions,
} from './actions';
import {
  IAddProductRequestAction,
  IProduct,
  IIncrementProductRequestAction,
  IDeleteProductRequestAction
} from './types';

import Remote from '../../../services/Remote';
import { errorHandler } from '../../../util/errorHandler';
import {
  ADD_PRODUCT_REQUEST_SUCCEEDED,
  DELETE_PRODUCT_REQUEST_SUCCEEDED,
  GET_API_PRODUCTS_REQUEST_SUCCEEDED,
  INCREMENT_PRODUCT_REQUEST_SUCCEEDED
} from '../../../constants/types.constants';

const epRemote = Remote.instance;
function* checkProductStock(action: IAddProductRequestAction) {
  try {
    const product: IProduct = yield call(epRemote.createProductRequest, action.product);

    yield put<IPutSagaEffect>(onSucceededActions({
      payload: product,
      type: ADD_PRODUCT_REQUEST_SUCCEEDED,
    }));
  } catch(err) {
    yield errorHandler(err);
  }
}

function* incrementProductQuantity(action: IIncrementProductRequestAction) {
  try {
    const product: IProduct = yield call(
      epRemote.incrementProductQuantityRequest,
      action.incrementedProduct.product,
      action.incrementedProduct.quantity
    );

    yield put<IPutSagaEffect>(onSucceededActions({
      payload: product,
      type: INCREMENT_PRODUCT_REQUEST_SUCCEEDED,
    }));

  } catch(err) {
    yield errorHandler(err);
  }
}

function* deleteProduct({ product }: IDeleteProductRequestAction) {
  try {
    yield call(epRemote.deleteProductRequest, product);

    yield put<IPutSagaEffect>(onSucceededActions({
      payload: product,
      type: DELETE_PRODUCT_REQUEST_SUCCEEDED,
    }));
  } catch(err) {
    yield errorHandler(err);
  }
}

function* getAPIProducts() {
  try {
    const products: IProduct[] = yield call(epRemote.productsRequest);

    yield put<IPutSagaEffect>(onSucceededActions({
      payload: products,
      type: GET_API_PRODUCTS_REQUEST_SUCCEEDED,
    }));
  } catch(err) {
    yield errorHandler(err);
  }
}

export default all([
  takeLatest('ADD_PRODUCT_REQUEST', checkProductStock),
  takeLatest('INCREMENT_PRODUCT_REQUEST', incrementProductQuantity),
  takeLatest('DELETE_PRODUCT_REQUEST', deleteProduct),
  takeLatest('GET_API_PRODUCTS_REQUEST', getAPIProducts),
]);
