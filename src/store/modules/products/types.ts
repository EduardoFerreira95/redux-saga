import {
  DELETE_PRODUCT_REQUEST_SUCCEEDED,
  INCREMENT_PRODUCT_REQUEST_SUCCEEDED,
  ADD_PRODUCT_REQUEST_SUCCEEDED,
  GET_API_PRODUCTS_REQUEST_SUCCEEDED,
  REQUEST_FAILURE,
  ADD_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  GET_API_PRODUCTS_REQUEST,
  INCREMENT_PRODUCT_REQUEST

} from "../../../constants/types.constants";

export interface IProductData {
  name: string;
	quantity: number;
}
export interface IProduct {
  id: number;
  name: string;
	quantity: number;
}

export interface IErrorHandler {
  content: string;
  isErrored: boolean;
}

export interface IStore {
  products: IProduct[];
  errorHandler: IErrorHandler;
};

export interface IDeleteProductRequestSucceeded {
  type: typeof DELETE_PRODUCT_REQUEST_SUCCEEDED;
  product: IProduct;
}

export interface IIncrementedProductRequestSucceeded {
  type: typeof INCREMENT_PRODUCT_REQUEST_SUCCEEDED;
  product: IProduct;
};

export interface IAddProductRequestSucceeded {
  type: typeof ADD_PRODUCT_REQUEST_SUCCEEDED;
  product: IProduct;
}

export interface IGetAPIRequestSucceeded {
  type: typeof GET_API_PRODUCTS_REQUEST_SUCCEEDED;
  products: IProduct[];
}
export interface IDeleteProductRequest {
  type: typeof DELETE_PRODUCT_REQUEST;
  product: IProduct;
}

export interface IIncrementedProductRequest {
  type: typeof INCREMENT_PRODUCT_REQUEST;
  product: IProduct;
};

export interface IAddProductRequest {
  type: typeof ADD_PRODUCT_REQUEST;
  product: IProductData;
}

export interface IGetAPIRequest {
  type: typeof GET_API_PRODUCTS_REQUEST;
  products: IProduct[];
}

export interface IRequestFailure {
  type: typeof REQUEST_FAILURE;
  errorHandler: IErrorHandler;
}

export type ActionRequestTypes = IRequestFailure | IGetAPIRequestSucceeded | IAddProductRequestSucceeded | IDeleteProductRequestSucceeded | IIncrementedProductRequestSucceeded
