import {
  IStore,
  IAddProductRequestSucceededAction,
  IIncrementProductRequestSucceededAction,
  IDeleteProductRequestSucceededAction,
  IGetAPIProductsRequestSucceededAction,
  RequestFailureType,
} from './../../store/modules/products/types';

export const handleAddNewProduct = (
  state: IStore,
  action: IAddProductRequestSucceededAction
): IStore => Object.assign({}, state, { ...action.product });

export const handleIncrementProductQuantity = (
  state: IStore,
  action: IIncrementProductRequestSucceededAction
): IStore => ({
  ...state,
  products: state.products.map(product =>
    product.id === action.product.id ? { ...action.product, quantity: action.product.quantity } : product,
  ),
});

export const handleDeleteProduct = (state: IStore, action: IDeleteProductRequestSucceededAction): IStore => ({
  ...state,
  products: state.products.filter(product => product.id !== action.product.id),
});

export const handleProducts = (state: IStore, action: IGetAPIProductsRequestSucceededAction): IStore => {
  return {
    ...state,
    products: action.products,
  }
};

export const handleRequestFailures = (state: IStore, action: RequestFailureType): IStore => ({
  ...state,
  errorHandler: {
    content: action.error.content,
    isErrored: action.error.isErrored,
  }
});

