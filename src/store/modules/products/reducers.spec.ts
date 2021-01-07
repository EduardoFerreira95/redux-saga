import reducer, { initialState as state } from './reducers';
import fakeRemote from '../../../fakes/fakeProductsRequests';

describe('Redux Reducer Test', () => {
  it('should be able to ADD_PRODUCT', () => {
    const { product, type } = fakeRemote.createProductRequest({
      name: 'Pencil',
      quantity: 4,
    });

    expect(
      reducer(state, { product, type }),
    ).toEqual({
      ...state,
      products: [...state.products, product],
    });
  });
  it('should able to DELETE_PRODUCT', () => {
    const { product } = fakeRemote.createProductRequest({
      name: 'Pencil',
      quantity: 4,
    });

    const { product: deletedProduct, type } = fakeRemote.deletedProducts(product);

    const { products } = reducer(state, { product: deletedProduct, type });

    expect(products).not.toContain(deletedProduct);
  });
  it('should be able GET_API_PRODUCTS', () => {
    const { products, type } = fakeRemote.productsRequest();


    expect(
      reducer(state, { products, type }).products,
    ).toEqual(products);
  });
});
