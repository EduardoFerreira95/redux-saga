import axios from 'axios';
import api from './api';
import serviceProducts from './products';

jest.mock('axios');
describe('Products API Services Test', () => {
  it('should be able to fetch products', () => {
    console.log()
  //   api.get.mockImplementationOnce(() => Promise.resolve([
  //     {
  //         "id": "38",
  //         "name": "name 38",
  //         "quantity": 38
  //     },
  //     {
  //         "id": "39",
  //         "name": "name 39",
  //         "quantity": 47
  //     },
  //     {
  //         "id": "40",
  //         "name": "name 40",
  //         "quantity": 9
  //     },
  // ]))
  //   serviceProducts.productsRequest().then(console.log);
  });
});
