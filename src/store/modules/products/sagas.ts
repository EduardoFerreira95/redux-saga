import { all, takeLatest, call, put, takeLeading } from 'redux-saga/effects';

import {
  ADD_PRODUCT_REQUEST_SUCCEEDED,
  DELETE_PRODUCT_REQUEST_SUCCEEDED,
  GET_API_PRODUCTS_REQUEST_SUCCEEDED,
  INCREMENT_PRODUCT_REQUEST_SUCCEEDED
} from '../../../constants/types.constants';

import {
  createAction,
} from './actions';

import {
  IProduct,
  IAddProductRequest,
  IDeleteProductRequest,
  IIncrementedProductRequest,
} from './types'

import epRemote from '../../../services/products';
import { errorHandler } from '../../../util/errorHandler';

export function* addProductStock({ product: data }: IAddProductRequest) {
  try {
    const product: IProduct = yield call(epRemote.createProductRequest, data);

    yield put(
      createAction<{
        product: IProduct
      }>(ADD_PRODUCT_REQUEST_SUCCEEDED)({ product }),
    );
  } catch(err) {
    yield errorHandler(err);
  }
}

export function* incrementProductQuantity({ product }: IIncrementedProductRequest) {
  try {
    const updatedProduct: IProduct = yield call(
      epRemote.incrementProductQuantityRequest,
      product,
    );

    yield put(
      createAction<{
        updatedProduct: IProduct
      }>(INCREMENT_PRODUCT_REQUEST_SUCCEEDED)({ updatedProduct }),
    );
  } catch(err) {
    yield errorHandler(err);
  }
}

export function* deleteProduct({ product }: IDeleteProductRequest) {
  try {
    yield call(epRemote.deleteProductRequest, product);

    yield put(
      createAction<{
        product: IProduct
      }>(DELETE_PRODUCT_REQUEST_SUCCEEDED)({ product }),
    );
  } catch(err) {
    yield errorHandler(err);
  }
}

export function* getAPIProducts() {
  try {
    const products: IProduct[] = yield call(epRemote.productsRequest);
    yield put(
      createAction<{
        products: IProduct[]
      }>(GET_API_PRODUCTS_REQUEST_SUCCEEDED)({ products }));
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
