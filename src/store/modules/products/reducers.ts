import { IErrorHandler, IStore, ActionsRequest } from './types';

const initialState: IStore = {
  products: [],
  errorHandler: {} as IErrorHandler,
};

const productReducer = (state = initialState, action: ActionsRequest ): IStore => {
  switch(action.type) {
    case 'ADD_PRODUCT_REQUEST_SUCCEEDED':
    return {
      ...state,
      products: [...state.products, action.payload.product],
    };
    case 'INCREMENT_PRODUCT_REQUEST_SUCCEEDED':
      return {
      ...state,
      products: state.products.map(product =>
        product.id === action.payload.updatedProduct.id ? {
          ...action.payload.updatedProduct,
          quantity: action.payload.updatedProduct.quantity
        } : product,
      ),
    }
    case 'DELETE_PRODUCT_REQUEST_SUCCEEDED':
    return {
      ...state,
      products: state.products.filter(product => product.id !== action.payload.product.id),
    }
    case 'GET_API_PRODUCTS_REQUEST_SUCCEEDED':
      return {
      ...state,
      products: action.payload.products,
    }
    case 'REQUEST_FAILURE':
      return {
      ...state,
      errorHandler: {
        content: action.payload.content,
        isErrored: action.payload.isErrored,
      }
    }
    default: return state;
  }
}

export default productReducer;
