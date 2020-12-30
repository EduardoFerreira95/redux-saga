import axios, { AxiosError } from "axios";
import { put } from "redux-saga/effects";
import { createAction } from "../store/modules/products/actions";

export function* errorHandler(error: any | AxiosError) {
  if (axios.isAxiosError(error)) {
    return yield put(
      createAction<{
        content: any | AxiosError,
        isErrored: boolean
      }>('REQUEST_FAILURE')({ content: error.response?.data, isErrored: true })
    );
  }
  return yield put(
    createAction<{
      content: string
      isErrored: boolean
    }>('REQUEST_FAILURE')({
      content: 'Oops! um erro aconteceu! Contate o estagiário',
      isErrored: true
    })
  );
}
