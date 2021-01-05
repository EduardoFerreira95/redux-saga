import { AxiosResponse } from 'axios';
import { IProduct } from '../store/modules/products/types';

export default interface IRemoteService {
  productsRequest(): Promise<AxiosResponse<IProduct[]>>;
  incrementProductQuantityRequest(product: IProduct, quantity: number): Promise<AxiosResponse<IProduct>>;
  deleteProductRequest(product: IProduct): Promise<AxiosResponse<IProduct>>;
  createProductRequest(data: IProduct): Promise<AxiosResponse<IProduct>>;
}
