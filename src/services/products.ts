import { AxiosResponse } from 'axios';
import { IProduct } from "../store/modules/products/types";
import api from './api';

const defaultRouteParams = '/products';

export default {
  async productsRequest(): Promise<AxiosResponse<IProduct[]>> {
    return api.get<IProduct[]>(defaultRouteParams)
  },

  async incrementProductQuantityRequest(product: IProduct, quantity: number): Promise<AxiosResponse<IProduct>> {
    return api.put<IProduct>(`${defaultRouteParams}/${product.id}`, {
      ...product,
      quantity: product.quantity + quantity,
    })
  },
  async deleteProductRequest(product: IProduct): Promise<AxiosResponse<IProduct>> {
    return api.delete<IProduct>(`${defaultRouteParams}/${product.id}`);
  },
  async createProductRequest(data: IProduct): Promise<AxiosResponse<IProduct>> {
    return api.post<IProduct>(`${defaultRouteParams}`, data);
  }
}
