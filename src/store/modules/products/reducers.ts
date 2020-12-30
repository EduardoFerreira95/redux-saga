import {
  handleAddNewProduct,
  handleDeleteProduct,
  handleIncrementProductQuantity,
  handleProducts,
  handleRequestFailures,
} from '../../../util/products/reducerHandler';
import { IErrorHandler, IStore, ActionsRequestTypes } from './types';

const initialState: IStore = {
  products: [],
  errorHandler: {} as IErrorHandler,
};

const productReducer = (state = initialState, action: ActionsRequestTypes): IStore => {
  switch(action.type) {
    case 'ADD_PRODUCT_REQUEST_SUCCEEDED': return handleAddNewProduct(state, action);
    case 'INCREMENT_PRODUCT_REQUEST_SUCCEEDED': return handleIncrementProductQuantity(state, action);
    case 'DELETE_PRODUCT_REQUEST_SUCCEEDED': return handleDeleteProduct(state, action);
    case 'GET_API_PRODUCTS_REQUEST_SUCCEEDED': return handleProducts(state, action);
    case 'REQUEST_FAILURE': return handleRequestFailures(state, action);
    default: return state;
  }
}

export default productReducer;
