import {
  RequestActions,
  IGetAPIProductsRequestAction,
  IProduct,
  IIncrementedProduct,
  IErrorHandler,
  RequestFailureType
} from './types';

import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_REQUEST_SUCCEEDED,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST_SUCCEEDED,
  GET_API_PRODUCTS_REQUEST,
  GET_API_PRODUCTS_REQUEST_SUCCEEDED,
  INCREMENT_PRODUCT_REQUEST,
  INCREMENT_PRODUCT_REQUEST_SUCCEEDED,
  REQUEST_FAILURE
} from '../../../constants/types.constants';

type ISucceededActionsHandler = {
  type:
  typeof INCREMENT_PRODUCT_REQUEST_SUCCEEDED |
  typeof ADD_PRODUCT_REQUEST_SUCCEEDED |
  typeof GET_API_PRODUCTS_REQUEST_SUCCEEDED |
  typeof DELETE_PRODUCT_REQUEST_SUCCEEDED;
  payload: IProduct | IProduct[] | IIncrementedProduct;
}

export const onRequestFailure = (error: IErrorHandler): RequestFailureType => ({
  type: REQUEST_FAILURE,
  error,
});

export const onSucceededActions = ({
  payload, type }: ISucceededActionsHandler
): ISucceededActionsHandler => {
  switch(type) {
    case ADD_PRODUCT_REQUEST_SUCCEEDED:
    let product = payload as IProduct;
    return {
      type,
      payload: product,
    }

    case INCREMENT_PRODUCT_REQUEST_SUCCEEDED:
    let incrementedProduct = payload as IIncrementedProduct;
    return {
      type,
      payload: incrementedProduct,
    }

    case DELETE_PRODUCT_REQUEST_SUCCEEDED:
    let deletedProduct = payload as IProduct;
    return {
      type,
      payload: deletedProduct,
    }
    case GET_API_PRODUCTS_REQUEST_SUCCEEDED:
    let products = payload as IProduct[];
    return {
      type,
      payload: products,
    }
    default:
      return {
        type,
        payload,
      }
  }
}

export const addProductRequest= (product: IProduct): RequestActions => ({
  type: ADD_PRODUCT_REQUEST,
  product,
});

export const updateRequestProduct = (incrementedProduct: IIncrementedProduct): RequestActions => ({
  type: INCREMENT_PRODUCT_REQUEST,
  incrementedProduct,
});

export const deleteRequestProduct = (product: IProduct): RequestActions => ({
  type: DELETE_PRODUCT_REQUEST,
  product,
});

export const getAPIProductsRequest = (): IGetAPIProductsRequestAction => ({ type: GET_API_PRODUCTS_REQUEST });
