import { IProduct } from '../store/modules/products/types';

export default interface IRemoteService {
  productsRequest(): Promise<IProduct[] | null>;
  incrementProductQuantityRequest(product: IProduct, quantity: number): Promise<IProduct>;
  deleteProductRequest(product: IProduct): Promise<void>;
  createProductRequest(data: IProduct): Promise<IProduct | null>;
}
