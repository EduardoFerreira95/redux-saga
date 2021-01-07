/* eslint-disable import/no-anonymous-default-export */
import {
  IProduct,
  IAddProductRequestSucceeded,
  IDeleteProductRequestSucceeded,
  IIncrementedProductRequestSucceeded,
  IGetAPIRequestSucceeded
} from './../store/modules/products/types';

let database = {
  products: [] as IProduct[],
};

interface IProductData {
  name: string;
  quantity: number;
};


export default {
  productsRequest(): IGetAPIRequestSucceeded {
    return {
      products: database.products,
      type: 'GET_API_PRODUCTS_REQUEST_SUCCEEDED',
    };
  },

  incrementedProducts(product: IProduct): IIncrementedProductRequestSucceeded {
    return {
      product: {
          ...product,
        quantity: product.quantity + 1,
      },
      type: 'INCREMENT_PRODUCT_REQUEST_SUCCEEDED',
    };
  },

  deletedProducts(product: IProduct): IDeleteProductRequestSucceeded {
    database.products = database.products.filter(p => p.id !== product.id);
    return database && {
      product: product,
      type: 'DELETE_PRODUCT_REQUEST_SUCCEEDED',
    };
  },

  createProductRequest(productData: IProductData): IAddProductRequestSucceeded {
    const product = Object.assign({
      ...productData,
      id: Number(Math.floor(Math.random() * 777) + 1),
    });

    database.products.push(product);
    return {
      type: 'ADD_PRODUCT_REQUEST_SUCCEEDED',
      product,
    };
  },
};
