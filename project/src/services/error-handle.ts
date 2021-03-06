import request from 'axios';
import { toast } from 'react-toastify';

import { store } from '../store';
import { redirectToRoute } from '../store/action';
import { ErrorType } from '../types/error';
import { HTTP_CODE, AppRoute } from '../const';


export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.error(response.data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        store.dispatch(redirectToRoute(AppRoute.Page404));
        toast.info(response.data.error);
        break;
      default:
        toast.info(`Error: ${response.data.error}.`);
        break;
    }
  }
};
