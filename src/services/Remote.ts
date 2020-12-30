import { IProduct } from "../store/modules/products/types";
import IRemoteService from "../types/RemoteService.types";
import api from './api';

const defaultRouteParams = '/products';

export default class Remote implements IRemoteService {
  private static _instance: Remote = new Remote();

  constructor() {
    if(Remote._instance) {
      throw new Error("It's not possible initialize a Singleton Pattern");
    }

    Remote._instance = this;
  }

  public static get instance(): Remote {
    return Remote._instance;
  }

  async productsRequest(): Promise<IProduct[]> {
    const { data: products } = await api.get<IProduct[]>(defaultRouteParams);

    return products;
  }

  async incrementProductQuantityRequest(product: IProduct, quantity: number): Promise<IProduct> {
    const { data: incrementedProduct } = await api.put<IProduct>(`${defaultRouteParams}/${product.id}`, {
      ...product,
      quantity: product.quantity + quantity,
    });

    return incrementedProduct;
  }
  async deleteProductRequest(product: IProduct): Promise<void> {
    await api.delete<IProduct>(`${defaultRouteParams}/${product.id}`);

    return;
  }
  async createProductRequest(data: IProduct): Promise<IProduct> {
    const { data: product } = await api.post<IProduct>(`${defaultRouteParams}`, data);

    return product;
  }
}

