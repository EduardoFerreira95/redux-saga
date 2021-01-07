/* eslint-disable import/no-anonymous-default-export */
import { AxiosResponse } from 'axios';
import { IProduct, IProductData } from "../store/modules/products/types";
import api from './api';

const defaultRouteParams = '/products';

export default {
  async productsRequest(): Promise<AxiosResponse<IProduct[]>> {
    return api.get<IProduct[]>(defaultRouteParams)
  },

  async incrementProductQuantityRequest(product: IProduct): Promise<AxiosResponse<IProduct>> {
    return api.put<IProduct>(`${defaultRouteParams}/${product.id}`, {
      ...product,
      quantity: product.quantity ++,
    })
  },
  async deleteProductRequest(product: IProduct): Promise<AxiosResponse<IProduct>> {
    return api.delete<IProduct>(`${defaultRouteParams}/${product.id}`);
  },
  async createProductRequest(productData: IProductData): Promise<AxiosResponse<IProduct>> {
    return api.post<IProduct>(`${defaultRouteParams}`, productData);
  }
}
