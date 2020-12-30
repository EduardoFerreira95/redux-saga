
import { IErrorHandler, IStore, ActionsRequestTypes } from './types';

const initialState: IStore = {
  products: [],
  errorHandler: {} as IErrorHandler,
};

const productReducer = (state = initialState, action: ActionsRequestTypes): IStore => {
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
        product.id === action.product.id ? { ...action.product, quantity: action.product.quantity } : product,
      ),
    }
    case 'DELETE_PRODUCT_REQUEST_SUCCEEDED':
    return {
      ...state,
      products: state.products.filter(product => product.id !== action.product.id),
    }
    case 'GET_API_PRODUCTS_REQUEST_SUCCEEDED':
    const { products } = action;
    console.log(products);
    return {
      ...state,
      products: products,
    }
    case 'REQUEST_FAILURE':
    return {
      ...state,
      errorHandler: {
        content: action.error.content,
        isErrored: action.error.isErrored,
      }
    }
    default: return state;
  }
}

export default productReducer;
