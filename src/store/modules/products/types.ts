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
export interface IProduct {
  id: number;
  name: string;
	quantity: number;
}

export interface IErrorHandler {
  content: string;
  isErrored: boolean;
}

export interface IIncrementedProduct {
  product: IProduct;
  quantity: number;
}

export interface IStore {
  products: IProduct[];
  errorHandler: IErrorHandler;
};

export interface IAddProductRequestAction {
  type: typeof ADD_PRODUCT_REQUEST;
  product: IProduct;
}

export interface IAddProductRequestSucceededAction {
  type: typeof ADD_PRODUCT_REQUEST_SUCCEEDED;
  product: IProduct;
}

export interface IGetAPIProductsRequestAction {
  type: typeof GET_API_PRODUCTS_REQUEST;
}

export interface IGetAPIProductsRequestSucceededAction {
  type: typeof GET_API_PRODUCTS_REQUEST_SUCCEEDED;
  products: IProduct[];
}


export interface IIncrementProductRequestAction {
  type: typeof INCREMENT_PRODUCT_REQUEST;
  incrementedProduct: IIncrementedProduct;
}
export interface IIncrementProductRequestSucceededAction {
  type: typeof INCREMENT_PRODUCT_REQUEST_SUCCEEDED;
  product: IProduct;
}

export interface IDeleteProductRequestAction {
  type: typeof DELETE_PRODUCT_REQUEST;
  product: IProduct;
}

export interface IDeleteProductRequestSucceededAction {
  type: typeof DELETE_PRODUCT_REQUEST_SUCCEEDED;
  product: IProduct;
}

export type RequestFailureType = {
  type: typeof REQUEST_FAILURE,
  error: IErrorHandler,
}

export type ActionsRequestTypes = SucceededRequestActions | RequestFailureType;

export type RequestActions = IDeleteProductRequestAction | IGetAPIProductsRequestAction | IAddProductRequestAction | IIncrementProductRequestAction;
export type SucceededRequestActions = IDeleteProductRequestSucceededAction | IGetAPIProductsRequestSucceededAction | IIncrementProductRequestSucceededAction | IAddProductRequestSucceededAction;

export type DeleteProductActionsRequestsTypes = IDeleteProductRequestAction | IDeleteProductRequestSucceededAction;
export type ActionsAPIRequestTypes = IGetAPIProductsRequestAction | IGetAPIProductsRequestSucceededAction;
export type AddProductActionsRequestTypes = IAddProductRequestAction | IAddProductRequestSucceededAction;
export type IncrementProductActionsRequestTypes = IIncrementProductRequestAction | IIncrementProductRequestSucceededAction;
