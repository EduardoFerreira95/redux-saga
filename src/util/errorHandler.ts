import axios, { AxiosError } from "axios";
import { put } from "redux-saga/effects";
import { onRequestFailure } from "../store/modules/products/actions";

export function* errorHandler(error: any | AxiosError) {
  if (axios.isAxiosError(error)) {
    return yield put(onRequestFailure({
      content: error.response?.data,
      isErrored: true,
    }));
  }
  return yield put(onRequestFailure({
    content: 'Oops! Algo inesperado aconteceu! Contate o estágiario.',
    isErrored: true,
  }));
}
