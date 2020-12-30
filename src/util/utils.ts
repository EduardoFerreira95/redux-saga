import { IStore } from './../store/modules/products/types';

export const handleUpdateObject = (
  oldState: IStore,
  newValues: any
) => Object.assign({}, oldState, newValues);
