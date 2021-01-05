import { all, takeLatest, call, put, takeLeading } from 'redux-saga/effects';

import {
  createAction,
} from './actions';

import {
  IProduct,
  IDeleteProductRequest,
  IIncrementedProductRequest,
  IAddProductRequest,
} from './types'

import epRemote from '../../../services/products';
import { errorHandler } from '../../../util/errorHandler';

function* addProductStock({ payload: { product: data } }: IAddProductRequest) {
  try {
    const product: IProduct = yield call(epRemote.createProductRequest, data);

    yield put(
      createAction<{
        product: IProduct
      }>('ADD_PRODUCT_REQUEST_SUCCEEDED')({ product }),
    );
  } catch(err) {
    yield errorHandler(err);
  }
}

function* incrementProductQuantity({ payload: { product, quantity } }: IIncrementedProductRequest) {
  try {
    const updatedProduct: IProduct = yield call(
      epRemote.incrementProductQuantityRequest,
      product,
      quantity,
    );

    yield put(
      createAction<{
        updatedProduct: IProduct
      }>('INCREMENT_PRODUCT_REQUEST_SUCCEEDED')({ updatedProduct }),
    );
  } catch(err) {
    yield errorHandler(err);
  }
}

function* deleteProduct({ payload: { product } }: IDeleteProductRequest) {
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
  takeLatest('ADD_PRODUCT_REQUEST', addProductStock),
  takeLatest('INCREMENT_PRODUCT_REQUEST', incrementProductQuantity),
  takeLeading('DELETE_PRODUCT_REQUEST', deleteProduct),
  takeLatest('GET_API_PRODUCTS_REQUEST', getAPIProducts),
]);
