import {
  DELETE_PRODUCT_REQUEST_SUCCEEDED,
  INCREMENT_PRODUCT_REQUEST_SUCCEEDED,
  ADD_PRODUCT_REQUEST_SUCCEEDED,
  GET_API_PRODUCTS_REQUEST_SUCCEEDED,
  REQUEST_FAILURE,
} from "../../../constants/types.constants";

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
export interface ActionsRequest {
  type: typeof DELETE_PRODUCT_REQUEST_SUCCEEDED |
  typeof INCREMENT_PRODUCT_REQUEST_SUCCEEDED |
  typeof ADD_PRODUCT_REQUEST_SUCCEEDED |
  typeof REQUEST_FAILURE |
  typeof GET_API_PRODUCTS_REQUEST_SUCCEEDED;
  payload: any;
}

export interface IDeleteProductRequest {
  type: typeof DELETE_PRODUCT_REQUEST_SUCCEEDED;
  payload: {
    product: IProduct;
  };
}

export interface IIncrementedProductRequest {
  type: typeof INCREMENT_PRODUCT_REQUEST_SUCCEEDED;
  payload: {
    quantity: number;
    product: IProduct;
  };
}

export interface IAddProductRequest {
  type: typeof ADD_PRODUCT_REQUEST_SUCCEEDED;
  payload: {
    product: IProduct;
  };
}
