
import { IErrorHandler, IStore, ActionRequestTypes } from './types';

export const initialState: IStore = {
  products: [],
  errorHandler: {} as IErrorHandler,
};

const productReducer = (state = initialState, action: ActionRequestTypes): IStore => {
  switch(action.type) {
    case 'ADD_PRODUCT_REQUEST_SUCCEEDED':
    return {
      ...state,
      products: [...state.products, action.product],
    }
    case 'INCREMENT_PRODUCT_REQUEST_SUCCEEDED':
    return {
      ...state,
      products: state.products.map(product =>
        product.id === action.product.id ? {
          ...action.product,
          quantity: action.product.quantity,
        } : product,
      ),
    };
    case 'DELETE_PRODUCT_REQUEST_SUCCEEDED':
    return {
      ...state,
      products: state.products.filter(product => product.id !== action.product.id),
    }
    case 'GET_API_PRODUCTS_REQUEST_SUCCEEDED':
      return {
      ...state,
      products: action.products,
    }
    case 'REQUEST_FAILURE':
    return {
      ...state,
      errorHandler: {
        content: action.errorHandler.content,
        isErrored: action.errorHandler.isErrored,
      }
    }
    default: return state;
  }
}

export default productReducer;
