import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IErrorHandler, IProduct, IStore } from './store/modules/products/types';
import {
  createAction,
} from './store/modules/products/actions'
import { errorHandler } from './util/errorHandler';

function App() {
  const { isErrored, content } = useSelector<IStore, IErrorHandler>(state => state.errorHandler);
  const products = useSelector<IStore, IProduct[]>(state => state.products);
  const dispatch = useDispatch();
  const [error, setError] = useState<IErrorHandler>({} as IErrorHandler);
  const [name, setName] = useState<string>();
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
      dispatch(createAction('GET_API_PRODUCTS_REQUEST')());
  }, [dispatch]);

  useEffect(() => {
    setError({
      content,
      isErrored,
    })
  }, [content, isErrored]);

  const handleChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const handleChangeQuantity = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value))
  }, []);

  const handleAddProduct = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      event.preventDefault();
      if(!name || quantity === 0) throw new Error();

      const product: IProduct  = Object.assign({
        name,
        quantity,
      });
      dispatch(
        createAction<{
          product: IProduct
        }>('ADD_PRODUCT_REQUEST')({ product }));
      setName('');
      setQuantity(0);
      setError({
        content: '',
        isErrored: false,
      });
      return;
    } catch (err) {
      errorHandler(err);
    }
  }, [name, quantity, dispatch]);

  const handleUpdateProduct = useCallback((product: IProduct, quantity: number) => {
    dispatch(
      createAction<{
        product: IProduct,
        quantity: number
      }>('INCREMENT_PRODUCT_REQUEST')({ product, quantity })
    );
  }, [dispatch]);

  const handleDeleteProduct = useCallback((product: IProduct) => {
    dispatch(createAction<{
      product: IProduct
    }>('DELETE_PRODUCT_REQUEST')({ product }));
  }, [dispatch]);

  const handleErrorMessage = useCallback(() => {
    setError({
      content: '',
      isErrored: false,
    })
  }, []);

  return (
    <div>
      <h1>Wine Saga</h1>
      <form>
        <label>Nome</label>
        <input value={name} onChange={handleChangeName} type="text"/>
        <label>Quantidade</label>
        <input value={quantity} onChange={handleChangeQuantity} type="number"/>
      </form>
        {
          error.isErrored && (
            <span style={{ display: 'flex' }}>
              <p style={{ margin: 10, color: 'red', fontWeight: 'bold', fontSize: 15 }}>{error.content}</p>
              <button type='button' onClick={handleErrorMessage}>Limpar</button>
            </span>
          )
        }
      <div className="button-group">
        <button type='button' onClick={handleAddProduct}>Adicionar</button>
      </div>
      <span>
        {
          products ? products.map(product => (
            <div style={{ display: 'flex' }} key={product.id}>
              <p>{product.name}</p>
              <p style={{ paddingRight: 10, paddingLeft: 10 }}>{product.quantity}</p>
              <button type='button' onClick={() => handleUpdateProduct(product, 1)}>Incrementar mais um</button>
              <button type='button' onClick={() => handleDeleteProduct(product)}>Deletar</button>
            </div>
          )) : (
            <div>
              <p>Não há produtos no estoque</p>
            </div>
          )
        }
      </span>
    </div>
  );
}

export default App;
