import { all, takeLatest, call, put } from 'redux-saga/effects';

import {
  createAction,
} from './actions';
import {
  IAddProductRequestAction,
  IProduct,
  IIncrementProductRequestAction,
  IDeleteProductRequestAction
} from './types';

import Remote from '../../../services/Remote';
import { errorHandler } from '../../../util/errorHandler';

const epRemote = Remote.instance;
function* checkProductStock(action: IAddProductRequestAction) {
  try {
    const product: IProduct = yield call(epRemote.createProductRequest, action.product);

    yield put(
      createAction<{
        product: IProduct
      }>('ADD_PRODUCT_REQUEST_SUCCEEDED')({ product }),
    );
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

    yield put(
      createAction<{
        product: IProduct
      }>('INCREMENT_PRODUCT_REQUEST_SUCCEEDED')({ product }),
    );
  } catch(err) {
    yield errorHandler(err);
  }
}

function* deleteProduct({ product }: IDeleteProductRequestAction) {
  try {
    yield call(epRemote.deleteProductRequest, product);

    yield put(
      createAction<{
        product: IProduct
      }>('DELETE_PRODUCT_REQUEST_SUCCEEDED')({ product }),
    );
  } catch(err) {
    yield errorHandler(err);
  }
}

function* getAPIProducts() {
  try {
    const products: IProduct[] = yield call(epRemote.productsRequest);
    yield put(
      createAction<{
        products: IProduct[]
      }>('GET_API_PRODUCTS_REQUEST_SUCCEEDED')({ products }));
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
